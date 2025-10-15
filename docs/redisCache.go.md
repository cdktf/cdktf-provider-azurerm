# `redisCache` Submodule <a name="`redisCache` Submodule" id="@cdktf/provider-azurerm.redisCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCache <a name="RedisCache" id="@cdktf/provider-azurerm.redisCache.RedisCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache azurerm_redis_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.NewRedisCache(scope Construct, id *string, config RedisCacheConfig) RedisCache
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig">RedisCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig">RedisCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule">PutPatchSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration">PutRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetAccessKeysAuthenticationEnabled">ResetAccessKeysAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetNonSslPortEnabled">ResetNonSslPortEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule">ResetPatchSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress">ResetPrivateStaticIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration">ResetRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion">ResetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster">ResetReplicasPerMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary">ResetReplicasPerPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount">ResetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings">ResetTenantSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCache.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.redisCache.RedisCache.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity"></a>

```go
func PutIdentity(value RedisCacheIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `PutPatchSchedule` <a name="PutPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule"></a>

```go
func PutPatchSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedisConfiguration` <a name="PutRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration"></a>

```go
func PutRedisConfiguration(value RedisCacheRedisConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts"></a>

```go
func PutTimeouts(value RedisCacheTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---

##### `ResetAccessKeysAuthenticationEnabled` <a name="ResetAccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetAccessKeysAuthenticationEnabled"></a>

```go
func ResetAccessKeysAuthenticationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion"></a>

```go
func ResetMinimumTlsVersion()
```

##### `ResetNonSslPortEnabled` <a name="ResetNonSslPortEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetNonSslPortEnabled"></a>

```go
func ResetNonSslPortEnabled()
```

##### `ResetPatchSchedule` <a name="ResetPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule"></a>

```go
func ResetPatchSchedule()
```

##### `ResetPrivateStaticIpAddress` <a name="ResetPrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress"></a>

```go
func ResetPrivateStaticIpAddress()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetRedisConfiguration` <a name="ResetRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration"></a>

```go
func ResetRedisConfiguration()
```

##### `ResetRedisVersion` <a name="ResetRedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion"></a>

```go
func ResetRedisVersion()
```

##### `ResetReplicasPerMaster` <a name="ResetReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster"></a>

```go
func ResetReplicasPerMaster()
```

##### `ResetReplicasPerPrimary` <a name="ResetReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary"></a>

```go
func ResetReplicasPerPrimary()
```

##### `ResetShardCount` <a name="ResetShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount"></a>

```go
func ResetShardCount()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTenantSettings` <a name="ResetTenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings"></a>

```go
func ResetTenantSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.RedisCache_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.RedisCache_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.RedisCache_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.RedisCache_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedisCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedisCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RedisCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule">PatchSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration">RedisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort">SslPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabledInput">AccessKeysAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabledInput">NonSslPortEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput">PatchScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput">PrivateStaticIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput">RedisConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput">RedisVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput">ReplicasPerMasterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput">ReplicasPerPrimaryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput">ShardCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput">TenantSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabled">AccessKeysAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabled">NonSslPortEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress">PrivateStaticIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion">RedisVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster">ReplicasPerMaster</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary">ReplicasPerPrimary</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings">TenantSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identity"></a>

```go
func Identity() RedisCacheIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a>

---

##### `PatchSchedule`<sup>Required</sup> <a name="PatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule"></a>

```go
func PatchSchedule() RedisCachePatchScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey"></a>

```go
func PrimaryAccessKey() *string
```

- *Type:* *string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `RedisConfiguration`<sup>Required</sup> <a name="RedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration"></a>

```go
func RedisConfiguration() RedisCacheRedisConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a>

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey"></a>

```go
func SecondaryAccessKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SslPort`<sup>Required</sup> <a name="SslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort"></a>

```go
func SslPort() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts"></a>

```go
func Timeouts() RedisCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a>

---

##### `AccessKeysAuthenticationEnabledInput`<sup>Optional</sup> <a name="AccessKeysAuthenticationEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabledInput"></a>

```go
func AccessKeysAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput"></a>

```go
func IdentityInput() RedisCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput"></a>

```go
func MinimumTlsVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonSslPortEnabledInput`<sup>Optional</sup> <a name="NonSslPortEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabledInput"></a>

```go
func NonSslPortEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PatchScheduleInput`<sup>Optional</sup> <a name="PatchScheduleInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput"></a>

```go
func PatchScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateStaticIpAddressInput`<sup>Optional</sup> <a name="PrivateStaticIpAddressInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput"></a>

```go
func PrivateStaticIpAddressInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RedisConfigurationInput`<sup>Optional</sup> <a name="RedisConfigurationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput"></a>

```go
func RedisConfigurationInput() RedisCacheRedisConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `RedisVersionInput`<sup>Optional</sup> <a name="RedisVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput"></a>

```go
func RedisVersionInput() *string
```

- *Type:* *string

---

##### `ReplicasPerMasterInput`<sup>Optional</sup> <a name="ReplicasPerMasterInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput"></a>

```go
func ReplicasPerMasterInput() *f64
```

- *Type:* *f64

---

##### `ReplicasPerPrimaryInput`<sup>Optional</sup> <a name="ReplicasPerPrimaryInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput"></a>

```go
func ReplicasPerPrimaryInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput"></a>

```go
func ShardCountInput() *f64
```

- *Type:* *f64

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantSettingsInput`<sup>Optional</sup> <a name="TenantSettingsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput"></a>

```go
func TenantSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessKeysAuthenticationEnabled`<sup>Required</sup> <a name="AccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabled"></a>

```go
func AccessKeysAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion"></a>

```go
func MinimumTlsVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NonSslPortEnabled`<sup>Required</sup> <a name="NonSslPortEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabled"></a>

```go
func NonSslPortEnabled() interface{}
```

- *Type:* interface{}

---

##### `PrivateStaticIpAddress`<sup>Required</sup> <a name="PrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress"></a>

```go
func PrivateStaticIpAddress() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `RedisVersion`<sup>Required</sup> <a name="RedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion"></a>

```go
func RedisVersion() *string
```

- *Type:* *string

---

##### `ReplicasPerMaster`<sup>Required</sup> <a name="ReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster"></a>

```go
func ReplicasPerMaster() *f64
```

- *Type:* *f64

---

##### `ReplicasPerPrimary`<sup>Required</sup> <a name="ReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary"></a>

```go
func ReplicasPerPrimary() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantSettings`<sup>Required</sup> <a name="TenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings"></a>

```go
func TenantSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisCacheConfig <a name="RedisCacheConfig" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

&rediscache.RedisCacheConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capacity: *f64,
	Family: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	AccessKeysAuthenticationEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.redisCache.RedisCacheIdentity,
	MinimumTlsVersion: *string,
	NonSslPortEnabled: interface{},
	PatchSchedule: interface{},
	PrivateStaticIpAddress: *string,
	PublicNetworkAccessEnabled: interface{},
	RedisConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.redisCache.RedisCacheRedisConfiguration,
	RedisVersion: *string,
	ReplicasPerMaster: *f64,
	ReplicasPerPrimary: *f64,
	ShardCount: *f64,
	SubnetId: *string,
	Tags: *map[string]*string,
	TenantSettings: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.redisCache.RedisCacheTimeouts,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#capacity RedisCache#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family">Family</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#family RedisCache#family}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#location RedisCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#name RedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.accessKeysAuthenticationEnabled">AccessKeysAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#access_keys_authentication_enabled RedisCache#access_keys_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#id RedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.nonSslPortEnabled">NonSslPortEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#non_ssl_port_enabled RedisCache#non_ssl_port_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule">PatchSchedule</a></code> | <code>interface{}</code> | patch_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress">PrivateStaticIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration">RedisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | redis_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion">RedisVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster">ReplicasPerMaster</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary">ReplicasPerPrimary</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount">ShardCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#tags RedisCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings">TenantSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#zones RedisCache#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#capacity RedisCache#capacity}.

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family"></a>

```go
Family *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#family RedisCache#family}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#location RedisCache#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#name RedisCache#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}.

---

##### `AccessKeysAuthenticationEnabled`<sup>Optional</sup> <a name="AccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.accessKeysAuthenticationEnabled"></a>

```go
AccessKeysAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#access_keys_authentication_enabled RedisCache#access_keys_authentication_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#id RedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity"></a>

```go
Identity RedisCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#identity RedisCache#identity}

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion"></a>

```go
MinimumTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}.

---

##### `NonSslPortEnabled`<sup>Optional</sup> <a name="NonSslPortEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.nonSslPortEnabled"></a>

```go
NonSslPortEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#non_ssl_port_enabled RedisCache#non_ssl_port_enabled}.

---

##### `PatchSchedule`<sup>Optional</sup> <a name="PatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule"></a>

```go
PatchSchedule interface{}
```

- *Type:* interface{}

patch_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}

---

##### `PrivateStaticIpAddress`<sup>Optional</sup> <a name="PrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress"></a>

```go
PrivateStaticIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}.

---

##### `RedisConfiguration`<sup>Optional</sup> <a name="RedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration"></a>

```go
RedisConfiguration RedisCacheRedisConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

redis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}

---

##### `RedisVersion`<sup>Optional</sup> <a name="RedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion"></a>

```go
RedisVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}.

---

##### `ReplicasPerMaster`<sup>Optional</sup> <a name="ReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster"></a>

```go
ReplicasPerMaster *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}.

---

##### `ReplicasPerPrimary`<sup>Optional</sup> <a name="ReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary"></a>

```go
ReplicasPerPrimary *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}.

---

##### `ShardCount`<sup>Optional</sup> <a name="ShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount"></a>

```go
ShardCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#tags RedisCache#tags}.

---

##### `TenantSettings`<sup>Optional</sup> <a name="TenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings"></a>

```go
TenantSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts"></a>

```go
Timeouts RedisCacheTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#zones RedisCache#zones}.

---

### RedisCacheIdentity <a name="RedisCacheIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

&rediscache.RedisCacheIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#type RedisCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#type RedisCache#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}.

---

### RedisCachePatchSchedule <a name="RedisCachePatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

&rediscache.RedisCachePatchSchedule {
	DayOfWeek: *string,
	MaintenanceWindow: *string,
	StartHourUtc: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc">StartHourUtc</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow"></a>

```go
MaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}.

---

##### `StartHourUtc`<sup>Optional</sup> <a name="StartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc"></a>

```go
StartHourUtc *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}.

---

### RedisCacheRedisConfiguration <a name="RedisCacheRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

&rediscache.RedisCacheRedisConfiguration {
	ActiveDirectoryAuthenticationEnabled: interface{},
	AofBackupEnabled: interface{},
	AofStorageConnectionString0: *string,
	AofStorageConnectionString1: *string,
	AuthenticationEnabled: interface{},
	DataPersistenceAuthenticationMethod: *string,
	MaxfragmentationmemoryReserved: *f64,
	MaxmemoryDelta: *f64,
	MaxmemoryPolicy: *string,
	MaxmemoryReserved: *f64,
	NotifyKeyspaceEvents: *string,
	RdbBackupEnabled: interface{},
	RdbBackupFrequency: *f64,
	RdbBackupMaxSnapshotCount: *f64,
	RdbStorageConnectionString: *string,
	StorageAccountSubscriptionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.activeDirectoryAuthenticationEnabled">ActiveDirectoryAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled">AofBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0">AofStorageConnectionString0</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1">AofStorageConnectionString1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#authentication_enabled RedisCache#authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.dataPersistenceAuthenticationMethod">DataPersistenceAuthenticationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved">MaxfragmentationmemoryReserved</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta">MaxmemoryDelta</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved">MaxmemoryReserved</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled">RdbBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency">RdbBackupFrequency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount">RdbBackupMaxSnapshotCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString">RdbStorageConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}. |

---

##### `ActiveDirectoryAuthenticationEnabled`<sup>Optional</sup> <a name="ActiveDirectoryAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.activeDirectoryAuthenticationEnabled"></a>

```go
ActiveDirectoryAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}.

---

##### `AofBackupEnabled`<sup>Optional</sup> <a name="AofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled"></a>

```go
AofBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}.

---

##### `AofStorageConnectionString0`<sup>Optional</sup> <a name="AofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0"></a>

```go
AofStorageConnectionString0 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}.

---

##### `AofStorageConnectionString1`<sup>Optional</sup> <a name="AofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1"></a>

```go
AofStorageConnectionString1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}.

---

##### `AuthenticationEnabled`<sup>Optional</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.authenticationEnabled"></a>

```go
AuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#authentication_enabled RedisCache#authentication_enabled}.

---

##### `DataPersistenceAuthenticationMethod`<sup>Optional</sup> <a name="DataPersistenceAuthenticationMethod" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.dataPersistenceAuthenticationMethod"></a>

```go
DataPersistenceAuthenticationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}.

---

##### `MaxfragmentationmemoryReserved`<sup>Optional</sup> <a name="MaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved"></a>

```go
MaxfragmentationmemoryReserved *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}.

---

##### `MaxmemoryDelta`<sup>Optional</sup> <a name="MaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta"></a>

```go
MaxmemoryDelta *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}.

---

##### `MaxmemoryPolicy`<sup>Optional</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy"></a>

```go
MaxmemoryPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}.

---

##### `MaxmemoryReserved`<sup>Optional</sup> <a name="MaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved"></a>

```go
MaxmemoryReserved *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}.

---

##### `NotifyKeyspaceEvents`<sup>Optional</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents"></a>

```go
NotifyKeyspaceEvents *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}.

---

##### `RdbBackupEnabled`<sup>Optional</sup> <a name="RdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled"></a>

```go
RdbBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}.

---

##### `RdbBackupFrequency`<sup>Optional</sup> <a name="RdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency"></a>

```go
RdbBackupFrequency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}.

---

##### `RdbBackupMaxSnapshotCount`<sup>Optional</sup> <a name="RdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount"></a>

```go
RdbBackupMaxSnapshotCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}.

---

##### `RdbStorageConnectionString`<sup>Optional</sup> <a name="RdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString"></a>

```go
RdbStorageConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}.

---

##### `StorageAccountSubscriptionId`<sup>Optional</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.storageAccountSubscriptionId"></a>

```go
StorageAccountSubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}.

---

### RedisCacheTimeouts <a name="RedisCacheTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

&rediscache.RedisCacheTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#create RedisCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#delete RedisCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#read RedisCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#update RedisCache#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#create RedisCache#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#delete RedisCache#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#read RedisCache#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/redis_cache#update RedisCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisCacheIdentityOutputReference <a name="RedisCacheIdentityOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.NewRedisCacheIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisCacheIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---


### RedisCachePatchScheduleList <a name="RedisCachePatchScheduleList" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.NewRedisCachePatchScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedisCachePatchScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get"></a>

```go
func Get(index *f64) RedisCachePatchScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisCachePatchScheduleOutputReference <a name="RedisCachePatchScheduleOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.NewRedisCachePatchScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedisCachePatchScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc">ResetStartHourUtc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetStartHourUtc` <a name="ResetStartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc"></a>

```go
func ResetStartHourUtc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput">StartHourUtcInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc">StartHourUtc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `StartHourUtcInput`<sup>Optional</sup> <a name="StartHourUtcInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput"></a>

```go
func StartHourUtcInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() *string
```

- *Type:* *string

---

##### `StartHourUtc`<sup>Required</sup> <a name="StartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc"></a>

```go
func StartHourUtc() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisCacheRedisConfigurationOutputReference <a name="RedisCacheRedisConfigurationOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.NewRedisCacheRedisConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisCacheRedisConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetActiveDirectoryAuthenticationEnabled">ResetActiveDirectoryAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled">ResetAofBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0">ResetAofStorageConnectionString0</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1">ResetAofStorageConnectionString1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAuthenticationEnabled">ResetAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetDataPersistenceAuthenticationMethod">ResetDataPersistenceAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved">ResetMaxfragmentationmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta">ResetMaxmemoryDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy">ResetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved">ResetMaxmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents">ResetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled">ResetRdbBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency">ResetRdbBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount">ResetRdbBackupMaxSnapshotCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString">ResetRdbStorageConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetStorageAccountSubscriptionId">ResetStorageAccountSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDirectoryAuthenticationEnabled` <a name="ResetActiveDirectoryAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetActiveDirectoryAuthenticationEnabled"></a>

```go
func ResetActiveDirectoryAuthenticationEnabled()
```

##### `ResetAofBackupEnabled` <a name="ResetAofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled"></a>

```go
func ResetAofBackupEnabled()
```

##### `ResetAofStorageConnectionString0` <a name="ResetAofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0"></a>

```go
func ResetAofStorageConnectionString0()
```

##### `ResetAofStorageConnectionString1` <a name="ResetAofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1"></a>

```go
func ResetAofStorageConnectionString1()
```

##### `ResetAuthenticationEnabled` <a name="ResetAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAuthenticationEnabled"></a>

```go
func ResetAuthenticationEnabled()
```

##### `ResetDataPersistenceAuthenticationMethod` <a name="ResetDataPersistenceAuthenticationMethod" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetDataPersistenceAuthenticationMethod"></a>

```go
func ResetDataPersistenceAuthenticationMethod()
```

##### `ResetMaxfragmentationmemoryReserved` <a name="ResetMaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved"></a>

```go
func ResetMaxfragmentationmemoryReserved()
```

##### `ResetMaxmemoryDelta` <a name="ResetMaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta"></a>

```go
func ResetMaxmemoryDelta()
```

##### `ResetMaxmemoryPolicy` <a name="ResetMaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy"></a>

```go
func ResetMaxmemoryPolicy()
```

##### `ResetMaxmemoryReserved` <a name="ResetMaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved"></a>

```go
func ResetMaxmemoryReserved()
```

##### `ResetNotifyKeyspaceEvents` <a name="ResetNotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents"></a>

```go
func ResetNotifyKeyspaceEvents()
```

##### `ResetRdbBackupEnabled` <a name="ResetRdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled"></a>

```go
func ResetRdbBackupEnabled()
```

##### `ResetRdbBackupFrequency` <a name="ResetRdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency"></a>

```go
func ResetRdbBackupFrequency()
```

##### `ResetRdbBackupMaxSnapshotCount` <a name="ResetRdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount"></a>

```go
func ResetRdbBackupMaxSnapshotCount()
```

##### `ResetRdbStorageConnectionString` <a name="ResetRdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString"></a>

```go
func ResetRdbStorageConnectionString()
```

##### `ResetStorageAccountSubscriptionId` <a name="ResetStorageAccountSubscriptionId" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetStorageAccountSubscriptionId"></a>

```go
func ResetStorageAccountSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients">Maxclients</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabledInput">ActiveDirectoryAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput">AofBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input">AofStorageConnectionString0Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input">AofStorageConnectionString1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabledInput">AuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethodInput">DataPersistenceAuthenticationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput">MaxfragmentationmemoryReservedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput">MaxmemoryDeltaInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput">MaxmemoryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput">MaxmemoryReservedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput">NotifyKeyspaceEventsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput">RdbBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput">RdbBackupFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput">RdbBackupMaxSnapshotCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput">RdbStorageConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionIdInput">StorageAccountSubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled">ActiveDirectoryAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled">AofBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0">AofStorageConnectionString0</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1">AofStorageConnectionString1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod">DataPersistenceAuthenticationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved">MaxfragmentationmemoryReserved</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta">MaxmemoryDelta</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved">MaxmemoryReserved</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled">RdbBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency">RdbBackupFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount">RdbBackupMaxSnapshotCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString">RdbStorageConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maxclients`<sup>Required</sup> <a name="Maxclients" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients"></a>

```go
func Maxclients() *f64
```

- *Type:* *f64

---

##### `ActiveDirectoryAuthenticationEnabledInput`<sup>Optional</sup> <a name="ActiveDirectoryAuthenticationEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabledInput"></a>

```go
func ActiveDirectoryAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AofBackupEnabledInput`<sup>Optional</sup> <a name="AofBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput"></a>

```go
func AofBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AofStorageConnectionString0Input`<sup>Optional</sup> <a name="AofStorageConnectionString0Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input"></a>

```go
func AofStorageConnectionString0Input() *string
```

- *Type:* *string

---

##### `AofStorageConnectionString1Input`<sup>Optional</sup> <a name="AofStorageConnectionString1Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input"></a>

```go
func AofStorageConnectionString1Input() *string
```

- *Type:* *string

---

##### `AuthenticationEnabledInput`<sup>Optional</sup> <a name="AuthenticationEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabledInput"></a>

```go
func AuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DataPersistenceAuthenticationMethodInput`<sup>Optional</sup> <a name="DataPersistenceAuthenticationMethodInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethodInput"></a>

```go
func DataPersistenceAuthenticationMethodInput() *string
```

- *Type:* *string

---

##### `MaxfragmentationmemoryReservedInput`<sup>Optional</sup> <a name="MaxfragmentationmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput"></a>

```go
func MaxfragmentationmemoryReservedInput() *f64
```

- *Type:* *f64

---

##### `MaxmemoryDeltaInput`<sup>Optional</sup> <a name="MaxmemoryDeltaInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput"></a>

```go
func MaxmemoryDeltaInput() *f64
```

- *Type:* *f64

---

##### `MaxmemoryPolicyInput`<sup>Optional</sup> <a name="MaxmemoryPolicyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput"></a>

```go
func MaxmemoryPolicyInput() *string
```

- *Type:* *string

---

##### `MaxmemoryReservedInput`<sup>Optional</sup> <a name="MaxmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput"></a>

```go
func MaxmemoryReservedInput() *f64
```

- *Type:* *f64

---

##### `NotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="NotifyKeyspaceEventsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput"></a>

```go
func NotifyKeyspaceEventsInput() *string
```

- *Type:* *string

---

##### `RdbBackupEnabledInput`<sup>Optional</sup> <a name="RdbBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput"></a>

```go
func RdbBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RdbBackupFrequencyInput`<sup>Optional</sup> <a name="RdbBackupFrequencyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput"></a>

```go
func RdbBackupFrequencyInput() *f64
```

- *Type:* *f64

---

##### `RdbBackupMaxSnapshotCountInput`<sup>Optional</sup> <a name="RdbBackupMaxSnapshotCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput"></a>

```go
func RdbBackupMaxSnapshotCountInput() *f64
```

- *Type:* *f64

---

##### `RdbStorageConnectionStringInput`<sup>Optional</sup> <a name="RdbStorageConnectionStringInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput"></a>

```go
func RdbStorageConnectionStringInput() *string
```

- *Type:* *string

---

##### `StorageAccountSubscriptionIdInput`<sup>Optional</sup> <a name="StorageAccountSubscriptionIdInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionIdInput"></a>

```go
func StorageAccountSubscriptionIdInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryAuthenticationEnabled`<sup>Required</sup> <a name="ActiveDirectoryAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled"></a>

```go
func ActiveDirectoryAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `AofBackupEnabled`<sup>Required</sup> <a name="AofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled"></a>

```go
func AofBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `AofStorageConnectionString0`<sup>Required</sup> <a name="AofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0"></a>

```go
func AofStorageConnectionString0() *string
```

- *Type:* *string

---

##### `AofStorageConnectionString1`<sup>Required</sup> <a name="AofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1"></a>

```go
func AofStorageConnectionString1() *string
```

- *Type:* *string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabled"></a>

```go
func AuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `DataPersistenceAuthenticationMethod`<sup>Required</sup> <a name="DataPersistenceAuthenticationMethod" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod"></a>

```go
func DataPersistenceAuthenticationMethod() *string
```

- *Type:* *string

---

##### `MaxfragmentationmemoryReserved`<sup>Required</sup> <a name="MaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved"></a>

```go
func MaxfragmentationmemoryReserved() *f64
```

- *Type:* *f64

---

##### `MaxmemoryDelta`<sup>Required</sup> <a name="MaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta"></a>

```go
func MaxmemoryDelta() *f64
```

- *Type:* *f64

---

##### `MaxmemoryPolicy`<sup>Required</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy"></a>

```go
func MaxmemoryPolicy() *string
```

- *Type:* *string

---

##### `MaxmemoryReserved`<sup>Required</sup> <a name="MaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved"></a>

```go
func MaxmemoryReserved() *f64
```

- *Type:* *f64

---

##### `NotifyKeyspaceEvents`<sup>Required</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents"></a>

```go
func NotifyKeyspaceEvents() *string
```

- *Type:* *string

---

##### `RdbBackupEnabled`<sup>Required</sup> <a name="RdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled"></a>

```go
func RdbBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `RdbBackupFrequency`<sup>Required</sup> <a name="RdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency"></a>

```go
func RdbBackupFrequency() *f64
```

- *Type:* *f64

---

##### `RdbBackupMaxSnapshotCount`<sup>Required</sup> <a name="RdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount"></a>

```go
func RdbBackupMaxSnapshotCount() *f64
```

- *Type:* *f64

---

##### `RdbStorageConnectionString`<sup>Required</sup> <a name="RdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString"></a>

```go
func RdbStorageConnectionString() *string
```

- *Type:* *string

---

##### `StorageAccountSubscriptionId`<sup>Required</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId"></a>

```go
func StorageAccountSubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisCacheRedisConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---


### RedisCacheTimeoutsOutputReference <a name="RedisCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/rediscache"

rediscache.NewRedisCacheTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisCacheTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



