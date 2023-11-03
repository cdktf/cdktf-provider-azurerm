# `azurerm_redis_cache`

Refer to the Terraform Registory for docs: [`azurerm_redis_cache`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache).

# `redisCache` Submodule <a name="`redisCache` Submodule" id="@cdktf/provider-azurerm.redisCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCache <a name="RedisCache" id="@cdktf/provider-azurerm.redisCache.RedisCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache azurerm_redis_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

new redisCache.RedisCache(scope: Construct, id: string, config: RedisCacheConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig">RedisCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig">RedisCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule">putPatchSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration">putRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetEnableNonSslPort">resetEnableNonSslPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule">resetPatchSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress">resetPrivateStaticIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration">resetRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion">resetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster">resetReplicasPerMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary">resetReplicasPerPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount">resetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings">resetTenantSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity"></a>

```typescript
public putIdentity(value: RedisCacheIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `putPatchSchedule` <a name="putPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule"></a>

```typescript
public putPatchSchedule(value: IResolvable | RedisCachePatchSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>[]

---

##### `putRedisConfiguration` <a name="putRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration"></a>

```typescript
public putRedisConfiguration(value: RedisCacheRedisConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts"></a>

```typescript
public putTimeouts(value: RedisCacheTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---

##### `resetEnableNonSslPort` <a name="resetEnableNonSslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetEnableNonSslPort"></a>

```typescript
public resetEnableNonSslPort(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion"></a>

```typescript
public resetMinimumTlsVersion(): void
```

##### `resetPatchSchedule` <a name="resetPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule"></a>

```typescript
public resetPatchSchedule(): void
```

##### `resetPrivateStaticIpAddress` <a name="resetPrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress"></a>

```typescript
public resetPrivateStaticIpAddress(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetRedisConfiguration` <a name="resetRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration"></a>

```typescript
public resetRedisConfiguration(): void
```

##### `resetRedisVersion` <a name="resetRedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion"></a>

```typescript
public resetRedisVersion(): void
```

##### `resetReplicasPerMaster` <a name="resetReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster"></a>

```typescript
public resetReplicasPerMaster(): void
```

##### `resetReplicasPerPrimary` <a name="resetReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary"></a>

```typescript
public resetReplicasPerPrimary(): void
```

##### `resetShardCount` <a name="resetShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount"></a>

```typescript
public resetShardCount(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantSettings` <a name="resetTenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings"></a>

```typescript
public resetTenantSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

redisCache.RedisCache.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

redisCache.RedisCache.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

redisCache.RedisCache.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

redisCache.RedisCache.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedisCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedisCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule">patchSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration">redisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort">sslPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPortInput">enableNonSslPortInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput">patchScheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput">privateStaticIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput">redisConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput">redisVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput">replicasPerMasterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput">replicasPerPrimaryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput">shardCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput">tenantSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPort">enableNonSslPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress">privateStaticIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion">redisVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster">replicasPerMaster</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary">replicasPerPrimary</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount">shardCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings">tenantSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identity"></a>

```typescript
public readonly identity: RedisCacheIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a>

---

##### `patchSchedule`<sup>Required</sup> <a name="patchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule"></a>

```typescript
public readonly patchSchedule: RedisCachePatchScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `redisConfiguration`<sup>Required</sup> <a name="redisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration"></a>

```typescript
public readonly redisConfiguration: RedisCacheRedisConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a>

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `sslPort`<sup>Required</sup> <a name="sslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort"></a>

```typescript
public readonly sslPort: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts"></a>

```typescript
public readonly timeouts: RedisCacheTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `enableNonSslPortInput`<sup>Optional</sup> <a name="enableNonSslPortInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPortInput"></a>

```typescript
public readonly enableNonSslPortInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput"></a>

```typescript
public readonly identityInput: RedisCacheIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput"></a>

```typescript
public readonly minimumTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patchScheduleInput`<sup>Optional</sup> <a name="patchScheduleInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput"></a>

```typescript
public readonly patchScheduleInput: IResolvable | RedisCachePatchSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>[]

---

##### `privateStaticIpAddressInput`<sup>Optional</sup> <a name="privateStaticIpAddressInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput"></a>

```typescript
public readonly privateStaticIpAddressInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redisConfigurationInput`<sup>Optional</sup> <a name="redisConfigurationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput"></a>

```typescript
public readonly redisConfigurationInput: RedisCacheRedisConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `redisVersionInput`<sup>Optional</sup> <a name="redisVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput"></a>

```typescript
public readonly redisVersionInput: string;
```

- *Type:* string

---

##### `replicasPerMasterInput`<sup>Optional</sup> <a name="replicasPerMasterInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput"></a>

```typescript
public readonly replicasPerMasterInput: number;
```

- *Type:* number

---

##### `replicasPerPrimaryInput`<sup>Optional</sup> <a name="replicasPerPrimaryInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput"></a>

```typescript
public readonly replicasPerPrimaryInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput"></a>

```typescript
public readonly shardCountInput: number;
```

- *Type:* number

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantSettingsInput`<sup>Optional</sup> <a name="tenantSettingsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput"></a>

```typescript
public readonly tenantSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RedisCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `enableNonSslPort`<sup>Required</sup> <a name="enableNonSslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPort"></a>

```typescript
public readonly enableNonSslPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateStaticIpAddress`<sup>Required</sup> <a name="privateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress"></a>

```typescript
public readonly privateStaticIpAddress: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redisVersion`<sup>Required</sup> <a name="redisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion"></a>

```typescript
public readonly redisVersion: string;
```

- *Type:* string

---

##### `replicasPerMaster`<sup>Required</sup> <a name="replicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster"></a>

```typescript
public readonly replicasPerMaster: number;
```

- *Type:* number

---

##### `replicasPerPrimary`<sup>Required</sup> <a name="replicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary"></a>

```typescript
public readonly replicasPerPrimary: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantSettings`<sup>Required</sup> <a name="tenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings"></a>

```typescript
public readonly tenantSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisCacheConfig <a name="RedisCacheConfig" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

const redisCacheConfig: redisCache.RedisCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#capacity RedisCache#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family">family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#family RedisCache#family}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#location RedisCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#name RedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.enableNonSslPort">enableNonSslPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#id RedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule">patchSchedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>[]</code> | patch_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress">privateStaticIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration">redisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | redis_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion">redisVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster">replicasPerMaster</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary">replicasPerPrimary</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount">shardCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#tags RedisCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings">tenantSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#zones RedisCache#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#capacity RedisCache#capacity}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#family RedisCache#family}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#location RedisCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#name RedisCache#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}.

---

##### `enableNonSslPort`<sup>Optional</sup> <a name="enableNonSslPort" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.enableNonSslPort"></a>

```typescript
public readonly enableNonSslPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#id RedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity"></a>

```typescript
public readonly identity: RedisCacheIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#identity RedisCache#identity}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}.

---

##### `patchSchedule`<sup>Optional</sup> <a name="patchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule"></a>

```typescript
public readonly patchSchedule: IResolvable | RedisCachePatchSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>[]

patch_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}

---

##### `privateStaticIpAddress`<sup>Optional</sup> <a name="privateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress"></a>

```typescript
public readonly privateStaticIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}.

---

##### `redisConfiguration`<sup>Optional</sup> <a name="redisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration"></a>

```typescript
public readonly redisConfiguration: RedisCacheRedisConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

redis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}

---

##### `redisVersion`<sup>Optional</sup> <a name="redisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion"></a>

```typescript
public readonly redisVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}.

---

##### `replicasPerMaster`<sup>Optional</sup> <a name="replicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster"></a>

```typescript
public readonly replicasPerMaster: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}.

---

##### `replicasPerPrimary`<sup>Optional</sup> <a name="replicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary"></a>

```typescript
public readonly replicasPerPrimary: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}.

---

##### `shardCount`<sup>Optional</sup> <a name="shardCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#tags RedisCache#tags}.

---

##### `tenantSettings`<sup>Optional</sup> <a name="tenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings"></a>

```typescript
public readonly tenantSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RedisCacheTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#zones RedisCache#zones}.

---

### RedisCacheIdentity <a name="RedisCacheIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

const redisCacheIdentity: redisCache.RedisCacheIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#type RedisCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#type RedisCache#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}.

---

### RedisCachePatchSchedule <a name="RedisCachePatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

const redisCachePatchSchedule: redisCache.RedisCachePatchSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc">startHourUtc</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}.

---

##### `startHourUtc`<sup>Optional</sup> <a name="startHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc"></a>

```typescript
public readonly startHourUtc: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}.

---

### RedisCacheRedisConfiguration <a name="RedisCacheRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

const redisCacheRedisConfiguration: redisCache.RedisCacheRedisConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled">aofBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0">aofStorageConnectionString0</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1">aofStorageConnectionString1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.enableAuthentication">enableAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#enable_authentication RedisCache#enable_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved">maxfragmentationmemoryReserved</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta">maxmemoryDelta</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved">maxmemoryReserved</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled">rdbBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency">rdbBackupFrequency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount">rdbBackupMaxSnapshotCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString">rdbStorageConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}. |

---

##### `aofBackupEnabled`<sup>Optional</sup> <a name="aofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled"></a>

```typescript
public readonly aofBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}.

---

##### `aofStorageConnectionString0`<sup>Optional</sup> <a name="aofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0"></a>

```typescript
public readonly aofStorageConnectionString0: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}.

---

##### `aofStorageConnectionString1`<sup>Optional</sup> <a name="aofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1"></a>

```typescript
public readonly aofStorageConnectionString1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}.

---

##### `enableAuthentication`<sup>Optional</sup> <a name="enableAuthentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.enableAuthentication"></a>

```typescript
public readonly enableAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#enable_authentication RedisCache#enable_authentication}.

---

##### `maxfragmentationmemoryReserved`<sup>Optional</sup> <a name="maxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved"></a>

```typescript
public readonly maxfragmentationmemoryReserved: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}.

---

##### `maxmemoryDelta`<sup>Optional</sup> <a name="maxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta"></a>

```typescript
public readonly maxmemoryDelta: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}.

---

##### `maxmemoryPolicy`<sup>Optional</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy"></a>

```typescript
public readonly maxmemoryPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}.

---

##### `maxmemoryReserved`<sup>Optional</sup> <a name="maxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved"></a>

```typescript
public readonly maxmemoryReserved: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}.

---

##### `notifyKeyspaceEvents`<sup>Optional</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents"></a>

```typescript
public readonly notifyKeyspaceEvents: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}.

---

##### `rdbBackupEnabled`<sup>Optional</sup> <a name="rdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled"></a>

```typescript
public readonly rdbBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}.

---

##### `rdbBackupFrequency`<sup>Optional</sup> <a name="rdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency"></a>

```typescript
public readonly rdbBackupFrequency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}.

---

##### `rdbBackupMaxSnapshotCount`<sup>Optional</sup> <a name="rdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount"></a>

```typescript
public readonly rdbBackupMaxSnapshotCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}.

---

##### `rdbStorageConnectionString`<sup>Optional</sup> <a name="rdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString"></a>

```typescript
public readonly rdbStorageConnectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}.

---

### RedisCacheTimeouts <a name="RedisCacheTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

const redisCacheTimeouts: redisCache.RedisCacheTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#create RedisCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#delete RedisCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#read RedisCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#update RedisCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#create RedisCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#delete RedisCache#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#read RedisCache#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/redis_cache#update RedisCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisCacheIdentityOutputReference <a name="RedisCacheIdentityOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

new redisCache.RedisCacheIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisCacheIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---


### RedisCachePatchScheduleList <a name="RedisCachePatchScheduleList" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

new redisCache.RedisCachePatchScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get"></a>

```typescript
public get(index: number): RedisCachePatchScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisCachePatchSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>[]

---


### RedisCachePatchScheduleOutputReference <a name="RedisCachePatchScheduleOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

new redisCache.RedisCachePatchScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc">resetStartHourUtc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetStartHourUtc` <a name="resetStartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc"></a>

```typescript
public resetStartHourUtc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput">startHourUtcInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc">startHourUtc</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: string;
```

- *Type:* string

---

##### `startHourUtcInput`<sup>Optional</sup> <a name="startHourUtcInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput"></a>

```typescript
public readonly startHourUtcInput: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `startHourUtc`<sup>Required</sup> <a name="startHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc"></a>

```typescript
public readonly startHourUtc: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisCachePatchSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>

---


### RedisCacheRedisConfigurationOutputReference <a name="RedisCacheRedisConfigurationOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

new redisCache.RedisCacheRedisConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled">resetAofBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0">resetAofStorageConnectionString0</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1">resetAofStorageConnectionString1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetEnableAuthentication">resetEnableAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved">resetMaxfragmentationmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta">resetMaxmemoryDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy">resetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved">resetMaxmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents">resetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled">resetRdbBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency">resetRdbBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount">resetRdbBackupMaxSnapshotCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString">resetRdbStorageConnectionString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAofBackupEnabled` <a name="resetAofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled"></a>

```typescript
public resetAofBackupEnabled(): void
```

##### `resetAofStorageConnectionString0` <a name="resetAofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0"></a>

```typescript
public resetAofStorageConnectionString0(): void
```

##### `resetAofStorageConnectionString1` <a name="resetAofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1"></a>

```typescript
public resetAofStorageConnectionString1(): void
```

##### `resetEnableAuthentication` <a name="resetEnableAuthentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetEnableAuthentication"></a>

```typescript
public resetEnableAuthentication(): void
```

##### `resetMaxfragmentationmemoryReserved` <a name="resetMaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved"></a>

```typescript
public resetMaxfragmentationmemoryReserved(): void
```

##### `resetMaxmemoryDelta` <a name="resetMaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta"></a>

```typescript
public resetMaxmemoryDelta(): void
```

##### `resetMaxmemoryPolicy` <a name="resetMaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy"></a>

```typescript
public resetMaxmemoryPolicy(): void
```

##### `resetMaxmemoryReserved` <a name="resetMaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved"></a>

```typescript
public resetMaxmemoryReserved(): void
```

##### `resetNotifyKeyspaceEvents` <a name="resetNotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents"></a>

```typescript
public resetNotifyKeyspaceEvents(): void
```

##### `resetRdbBackupEnabled` <a name="resetRdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled"></a>

```typescript
public resetRdbBackupEnabled(): void
```

##### `resetRdbBackupFrequency` <a name="resetRdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency"></a>

```typescript
public resetRdbBackupFrequency(): void
```

##### `resetRdbBackupMaxSnapshotCount` <a name="resetRdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount"></a>

```typescript
public resetRdbBackupMaxSnapshotCount(): void
```

##### `resetRdbStorageConnectionString` <a name="resetRdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString"></a>

```typescript
public resetRdbStorageConnectionString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients">maxclients</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput">aofBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input">aofStorageConnectionString0Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input">aofStorageConnectionString1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthenticationInput">enableAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput">maxfragmentationmemoryReservedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput">maxmemoryDeltaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput">maxmemoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput">maxmemoryReservedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput">notifyKeyspaceEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput">rdbBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput">rdbBackupFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput">rdbBackupMaxSnapshotCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput">rdbStorageConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled">aofBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0">aofStorageConnectionString0</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1">aofStorageConnectionString1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthentication">enableAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved">maxfragmentationmemoryReserved</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta">maxmemoryDelta</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved">maxmemoryReserved</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled">rdbBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency">rdbBackupFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount">rdbBackupMaxSnapshotCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString">rdbStorageConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxclients`<sup>Required</sup> <a name="maxclients" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients"></a>

```typescript
public readonly maxclients: number;
```

- *Type:* number

---

##### `aofBackupEnabledInput`<sup>Optional</sup> <a name="aofBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput"></a>

```typescript
public readonly aofBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aofStorageConnectionString0Input`<sup>Optional</sup> <a name="aofStorageConnectionString0Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input"></a>

```typescript
public readonly aofStorageConnectionString0Input: string;
```

- *Type:* string

---

##### `aofStorageConnectionString1Input`<sup>Optional</sup> <a name="aofStorageConnectionString1Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input"></a>

```typescript
public readonly aofStorageConnectionString1Input: string;
```

- *Type:* string

---

##### `enableAuthenticationInput`<sup>Optional</sup> <a name="enableAuthenticationInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthenticationInput"></a>

```typescript
public readonly enableAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxfragmentationmemoryReservedInput`<sup>Optional</sup> <a name="maxfragmentationmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput"></a>

```typescript
public readonly maxfragmentationmemoryReservedInput: number;
```

- *Type:* number

---

##### `maxmemoryDeltaInput`<sup>Optional</sup> <a name="maxmemoryDeltaInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput"></a>

```typescript
public readonly maxmemoryDeltaInput: number;
```

- *Type:* number

---

##### `maxmemoryPolicyInput`<sup>Optional</sup> <a name="maxmemoryPolicyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput"></a>

```typescript
public readonly maxmemoryPolicyInput: string;
```

- *Type:* string

---

##### `maxmemoryReservedInput`<sup>Optional</sup> <a name="maxmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput"></a>

```typescript
public readonly maxmemoryReservedInput: number;
```

- *Type:* number

---

##### `notifyKeyspaceEventsInput`<sup>Optional</sup> <a name="notifyKeyspaceEventsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput"></a>

```typescript
public readonly notifyKeyspaceEventsInput: string;
```

- *Type:* string

---

##### `rdbBackupEnabledInput`<sup>Optional</sup> <a name="rdbBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput"></a>

```typescript
public readonly rdbBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rdbBackupFrequencyInput`<sup>Optional</sup> <a name="rdbBackupFrequencyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput"></a>

```typescript
public readonly rdbBackupFrequencyInput: number;
```

- *Type:* number

---

##### `rdbBackupMaxSnapshotCountInput`<sup>Optional</sup> <a name="rdbBackupMaxSnapshotCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput"></a>

```typescript
public readonly rdbBackupMaxSnapshotCountInput: number;
```

- *Type:* number

---

##### `rdbStorageConnectionStringInput`<sup>Optional</sup> <a name="rdbStorageConnectionStringInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput"></a>

```typescript
public readonly rdbStorageConnectionStringInput: string;
```

- *Type:* string

---

##### `aofBackupEnabled`<sup>Required</sup> <a name="aofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled"></a>

```typescript
public readonly aofBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aofStorageConnectionString0`<sup>Required</sup> <a name="aofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0"></a>

```typescript
public readonly aofStorageConnectionString0: string;
```

- *Type:* string

---

##### `aofStorageConnectionString1`<sup>Required</sup> <a name="aofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1"></a>

```typescript
public readonly aofStorageConnectionString1: string;
```

- *Type:* string

---

##### `enableAuthentication`<sup>Required</sup> <a name="enableAuthentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthentication"></a>

```typescript
public readonly enableAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxfragmentationmemoryReserved`<sup>Required</sup> <a name="maxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved"></a>

```typescript
public readonly maxfragmentationmemoryReserved: number;
```

- *Type:* number

---

##### `maxmemoryDelta`<sup>Required</sup> <a name="maxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta"></a>

```typescript
public readonly maxmemoryDelta: number;
```

- *Type:* number

---

##### `maxmemoryPolicy`<sup>Required</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy"></a>

```typescript
public readonly maxmemoryPolicy: string;
```

- *Type:* string

---

##### `maxmemoryReserved`<sup>Required</sup> <a name="maxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved"></a>

```typescript
public readonly maxmemoryReserved: number;
```

- *Type:* number

---

##### `notifyKeyspaceEvents`<sup>Required</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents"></a>

```typescript
public readonly notifyKeyspaceEvents: string;
```

- *Type:* string

---

##### `rdbBackupEnabled`<sup>Required</sup> <a name="rdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled"></a>

```typescript
public readonly rdbBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rdbBackupFrequency`<sup>Required</sup> <a name="rdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency"></a>

```typescript
public readonly rdbBackupFrequency: number;
```

- *Type:* number

---

##### `rdbBackupMaxSnapshotCount`<sup>Required</sup> <a name="rdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount"></a>

```typescript
public readonly rdbBackupMaxSnapshotCount: number;
```

- *Type:* number

---

##### `rdbStorageConnectionString`<sup>Required</sup> <a name="rdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString"></a>

```typescript
public readonly rdbStorageConnectionString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisCacheRedisConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---


### RedisCacheTimeoutsOutputReference <a name="RedisCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer"></a>

```typescript
import { redisCache } from '@cdktf/provider-azurerm'

new redisCache.RedisCacheTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---



