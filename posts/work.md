---
title : '최단경로알고리즘'
date: '2020-01-02'
---

## 최단 경로 알고리즘

### 설명

말 그대로 최단 경로를 찾는 알고리즘이다.

종류를 구분하는 요인 중에서 큰 요인은 시작점의 개수이다.

시작점의 개수가 하나인 경우에는 다익스트라이고

시작점의 개수가 모든 노드에 해당하는 경우 플로이드 워셜이다.

### 종류

최단 경로 알고리즘은 크게

- 다익스트라 알고리즘
  
- 플로이드 워셜 알고리즘
  

이 있다.

### 다익스트라 알고리즘

#### 설명

다익스트라 알고리즘은 처음 설명에서 나온 것처럼 한 시작점에 모든 노드들에 대한 간선에 대한 최단 거리를 기록한 알고리즘이다.

#### 구현방식

1. 구현은 시작점에서 연결된 노드를 짧은 가중치를 가진 간선의 노드부터 방문한 후 거리를 기록
  
2. 방문하지 않은 노드를 방문 현재의 노드까지 온 거리와 앞으로 갈 노드의 거리와 기존의 입력되어진 거리와 비교 작을 경우 교체
  
3. 모든 노드를 방문하기 까지 1,2 반복
  

```python
import heapq
import sys

# 노드 개수와 간선의 개수를 입력받는다.
n, m = map(int, sys.stdin.readline().rstrip().split())

# 시작점을 설정한다
start = int(sys.stdin.readline().rstrip())

# 0은 제외 노드 개수 만큼 설정
graph = [[] for _  in range(n + 1)]

# 노드간의 거리를 크게 설정
distance = [999999] * (n+1)
# 시작점과의 거리는 0으로 설정
distance[start] = 0

# 그래프 생성
for i in range(m):
    # a 출발 노드, b 목표 노드, c 거리
    a, b, c = map(int, sys.stdin.readline().rstrip().split())
    graph[a].append((b, c))

q = []

# 간선의 가중치가 짧은 순으로 뽑기위해 우선순위 큐 설정
heapq.heappush(q,(0, start))

while q:
    item = heapq.heappop(q)

    # 현재 거리 배열에 들어가 있는 값과 그래프에 들어가 있는 가중치 값 비교
    if distance[item[1]] < item[0]:
        continue

    # 빼낸 노드에서 연결된 노드 비교
    for node in graph[item[1]]:
        if distance[node[0]] > node[1] + distance[item[1]]:
            distance[node[0]] = node[1] + distance[item[1]]
            heapq.heappush(q, (distance[node[0]], node[0]))

# 연결된 부분은 최단 거리 표현, 안된 경우 -1
for i in range(1, n+1):
    a = -1 if distance[i] == 999999 else distance[i]
    print(a)
```

### 플로이드 워셜 알고리즘

#### 설명

모든 노드들에 대한 가중치를 계산하는 알고리즘, 다익스트라의 경우 시작점이 하나이기에 다른 시작점을 가질 경우 다시 계산을 해야하지만 플로이드 워셜의 경우 한번 돌아간 이후에는 모든 노드들에 대한 가중치를 알 수 있다.

#### 구현

브루트 포스로 구현한다고 생각하면 편하다.

A노드에서 B노드로 가는 것만 생각하는 것이 아닌

A노드에서 K노드를 거친 후 B노드로 이동하는 부분으로 해서 가장 짧은 것을 취하는 방식이다.

문제는 A노드에서 B노드로 가는 것만 행렬으로 구현 시 시간 복잡도 O(N^2) 이지만 중간에 K노드의 존재가 있어서 O(N^3)이다.

```python
import sys
INF = int(1e9)

# 노드 개수와 간선 개수 입력
n = int(sys.stdin.readline().rstrip())
m = int(sys.stdin.readline().rstrip())

# 그래프들의 거리는 처음에는 크게 설정
graph = [[INF] * (n+1) for _ in range(n+1)]

# 자기 자신은 0으로 설정
for a in range(1, n+1):
    for b in range(1, n+1):
        if a == b:
            graph[a][b] = 0

# 그래프 생성
for _ in range(m):
    a, b, c = map(int, sys.stdin.readline().rstrip().split())
    graph[a][b] = c

# a와 b 간의 거리와 중간 노드를 거쳐가는 부분을 고려
for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            graph[a][b] = min(graph[a][b] , graph[a][k] + graph[k][b])

# 조회시에는 이중 배열이기에 이중 반복문
for a in range(1, n+1):
    for b in range(1, n+1):
        if graph[a][b] == INF:
            print("INFINITY")
        else :
            print(graph[a][b], end=' ')
    print( )][b], end=' ')
    print( )
```