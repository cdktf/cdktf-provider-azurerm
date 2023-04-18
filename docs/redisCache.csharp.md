# `azurerm_redis_cache`

Refer to the Terraform Registory for docs: [`azurerm_redis_cache`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache).

# `redisCache` Submodule <a name="`redisCache` Submodule" id="@cdktf/provider-azurerm.redisCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCache <a name="RedisCache" id="@cdktf/provider-azurerm.redisCache.RedisCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache azurerm_redis_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCache(Construct Scope, string Id, RedisCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig">RedisCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig">RedisCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule">PutPatchSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration">PutRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetEnableNonSslPort">ResetEnableNonSslPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity"></a>

```csharp
private void PutIdentity(RedisCacheIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `PutPatchSchedule` <a name="PutPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule"></a>

```csharp
private void PutPatchSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule.parameter.value"></a>

- *Type:* object

---

##### `PutRedisConfiguration` <a name="PutRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration"></a>

```csharp
private void PutRedisConfiguration(RedisCacheRedisConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts"></a>

```csharp
private void PutTimeouts(RedisCacheTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---

##### `ResetEnableNonSslPort` <a name="ResetEnableNonSslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetEnableNonSslPort"></a>

```csharp
private void ResetEnableNonSslPort()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion"></a>

```csharp
private void ResetMinimumTlsVersion()
```

##### `ResetPatchSchedule` <a name="ResetPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule"></a>

```csharp
private void ResetPatchSchedule()
```

##### `ResetPrivateStaticIpAddress` <a name="ResetPrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress"></a>

```csharp
private void ResetPrivateStaticIpAddress()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetRedisConfiguration` <a name="ResetRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration"></a>

```csharp
private void ResetRedisConfiguration()
```

##### `ResetRedisVersion` <a name="ResetRedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion"></a>

```csharp
private void ResetRedisVersion()
```

##### `ResetReplicasPerMaster` <a name="ResetReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster"></a>

```csharp
private void ResetReplicasPerMaster()
```

##### `ResetReplicasPerPrimary` <a name="ResetReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary"></a>

```csharp
private void ResetReplicasPerPrimary()
```

##### `ResetShardCount` <a name="ResetShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount"></a>

```csharp
private void ResetShardCount()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenantSettings` <a name="ResetTenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings"></a>

```csharp
private void ResetTenantSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisCache.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule">PatchSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration">RedisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort">SslPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPortInput">EnableNonSslPortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput">PatchScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput">PrivateStaticIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput">RedisConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput">RedisVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput">ReplicasPerMasterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput">ReplicasPerPrimaryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput">ShardCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput">TenantSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPort">EnableNonSslPort</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress">PrivateStaticIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion">RedisVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster">ReplicasPerMaster</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary">ReplicasPerPrimary</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount">ShardCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings">TenantSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identity"></a>

```csharp
public RedisCacheIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a>

---

##### `PatchSchedule`<sup>Required</sup> <a name="PatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule"></a>

```csharp
public RedisCachePatchScheduleList PatchSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `RedisConfiguration`<sup>Required</sup> <a name="RedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration"></a>

```csharp
public RedisCacheRedisConfigurationOutputReference RedisConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a>

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SslPort`<sup>Required</sup> <a name="SslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort"></a>

```csharp
public double SslPort { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts"></a>

```csharp
public RedisCacheTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `EnableNonSslPortInput`<sup>Optional</sup> <a name="EnableNonSslPortInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPortInput"></a>

```csharp
public object EnableNonSslPortInput { get; }
```

- *Type:* object

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput"></a>

```csharp
public RedisCacheIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput"></a>

```csharp
public string MinimumTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatchScheduleInput`<sup>Optional</sup> <a name="PatchScheduleInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput"></a>

```csharp
public object PatchScheduleInput { get; }
```

- *Type:* object

---

##### `PrivateStaticIpAddressInput`<sup>Optional</sup> <a name="PrivateStaticIpAddressInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput"></a>

```csharp
public string PrivateStaticIpAddressInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `RedisConfigurationInput`<sup>Optional</sup> <a name="RedisConfigurationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput"></a>

```csharp
public RedisCacheRedisConfiguration RedisConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `RedisVersionInput`<sup>Optional</sup> <a name="RedisVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput"></a>

```csharp
public string RedisVersionInput { get; }
```

- *Type:* string

---

##### `ReplicasPerMasterInput`<sup>Optional</sup> <a name="ReplicasPerMasterInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput"></a>

```csharp
public double ReplicasPerMasterInput { get; }
```

- *Type:* double

---

##### `ReplicasPerPrimaryInput`<sup>Optional</sup> <a name="ReplicasPerPrimaryInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput"></a>

```csharp
public double ReplicasPerPrimaryInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput"></a>

```csharp
public double ShardCountInput { get; }
```

- *Type:* double

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantSettingsInput`<sup>Optional</sup> <a name="TenantSettingsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TenantSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `EnableNonSslPort`<sup>Required</sup> <a name="EnableNonSslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPort"></a>

```csharp
public object EnableNonSslPort { get; }
```

- *Type:* object

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateStaticIpAddress`<sup>Required</sup> <a name="PrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress"></a>

```csharp
public string PrivateStaticIpAddress { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `RedisVersion`<sup>Required</sup> <a name="RedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion"></a>

```csharp
public string RedisVersion { get; }
```

- *Type:* string

---

##### `ReplicasPerMaster`<sup>Required</sup> <a name="ReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster"></a>

```csharp
public double ReplicasPerMaster { get; }
```

- *Type:* double

---

##### `ReplicasPerPrimary`<sup>Required</sup> <a name="ReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary"></a>

```csharp
public double ReplicasPerPrimary { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount"></a>

```csharp
public double ShardCount { get; }
```

- *Type:* double

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantSettings`<sup>Required</sup> <a name="TenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TenantSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisCacheConfig <a name="RedisCacheConfig" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Capacity,
    string Family,
    string Location,
    string Name,
    string ResourceGroupName,
    string SkuName,
    object EnableNonSslPort = null,
    string Id = null,
    RedisCacheIdentity Identity = null,
    string MinimumTlsVersion = null,
    object PatchSchedule = null,
    string PrivateStaticIpAddress = null,
    object PublicNetworkAccessEnabled = null,
    RedisCacheRedisConfiguration RedisConfiguration = null,
    string RedisVersion = null,
    double ReplicasPerMaster = null,
    double ReplicasPerPrimary = null,
    double ShardCount = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TenantSettings = null,
    RedisCacheTimeouts Timeouts = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#capacity RedisCache#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family">Family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#family RedisCache#family}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#location RedisCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#name RedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.enableNonSslPort">EnableNonSslPort</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#id RedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule">PatchSchedule</a></code> | <code>object</code> | patch_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress">PrivateStaticIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration">RedisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | redis_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion">RedisVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster">ReplicasPerMaster</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary">ReplicasPerPrimary</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount">ShardCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#tags RedisCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings">TenantSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#zones RedisCache#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#capacity RedisCache#capacity}.

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#family RedisCache#family}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#location RedisCache#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#name RedisCache#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}.

---

##### `EnableNonSslPort`<sup>Optional</sup> <a name="EnableNonSslPort" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.enableNonSslPort"></a>

```csharp
public object EnableNonSslPort { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#id RedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity"></a>

```csharp
public RedisCacheIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#identity RedisCache#identity}

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}.

---

##### `PatchSchedule`<sup>Optional</sup> <a name="PatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule"></a>

```csharp
public object PatchSchedule { get; set; }
```

- *Type:* object

patch_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}

---

##### `PrivateStaticIpAddress`<sup>Optional</sup> <a name="PrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress"></a>

```csharp
public string PrivateStaticIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}.

---

##### `RedisConfiguration`<sup>Optional</sup> <a name="RedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration"></a>

```csharp
public RedisCacheRedisConfiguration RedisConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

redis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}

---

##### `RedisVersion`<sup>Optional</sup> <a name="RedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion"></a>

```csharp
public string RedisVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}.

---

##### `ReplicasPerMaster`<sup>Optional</sup> <a name="ReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster"></a>

```csharp
public double ReplicasPerMaster { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}.

---

##### `ReplicasPerPrimary`<sup>Optional</sup> <a name="ReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary"></a>

```csharp
public double ReplicasPerPrimary { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}.

---

##### `ShardCount`<sup>Optional</sup> <a name="ShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount"></a>

```csharp
public double ShardCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#tags RedisCache#tags}.

---

##### `TenantSettings`<sup>Optional</sup> <a name="TenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TenantSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts"></a>

```csharp
public RedisCacheTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#zones RedisCache#zones}.

---

### RedisCacheIdentity <a name="RedisCacheIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#type RedisCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#type RedisCache#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}.

---

### RedisCachePatchSchedule <a name="RedisCachePatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCachePatchSchedule {
    string DayOfWeek,
    string MaintenanceWindow = null,
    double StartHourUtc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc">StartHourUtc</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}.

---

##### `StartHourUtc`<sup>Optional</sup> <a name="StartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc"></a>

```csharp
public double StartHourUtc { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}.

---

### RedisCacheRedisConfiguration <a name="RedisCacheRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheRedisConfiguration {
    object AofBackupEnabled = null,
    string AofStorageConnectionString0 = null,
    string AofStorageConnectionString1 = null,
    object EnableAuthentication = null,
    double MaxfragmentationmemoryReserved = null,
    double MaxmemoryDelta = null,
    string MaxmemoryPolicy = null,
    double MaxmemoryReserved = null,
    string NotifyKeyspaceEvents = null,
    object RdbBackupEnabled = null,
    double RdbBackupFrequency = null,
    double RdbBackupMaxSnapshotCount = null,
    string RdbStorageConnectionString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled">AofBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0">AofStorageConnectionString0</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1">AofStorageConnectionString1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.enableAuthentication">EnableAuthentication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#enable_authentication RedisCache#enable_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved">MaxfragmentationmemoryReserved</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta">MaxmemoryDelta</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved">MaxmemoryReserved</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled">RdbBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency">RdbBackupFrequency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount">RdbBackupMaxSnapshotCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString">RdbStorageConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}. |

---

##### `AofBackupEnabled`<sup>Optional</sup> <a name="AofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled"></a>

```csharp
public object AofBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}.

---

##### `AofStorageConnectionString0`<sup>Optional</sup> <a name="AofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0"></a>

```csharp
public string AofStorageConnectionString0 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}.

---

##### `AofStorageConnectionString1`<sup>Optional</sup> <a name="AofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1"></a>

```csharp
public string AofStorageConnectionString1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}.

---

##### `EnableAuthentication`<sup>Optional</sup> <a name="EnableAuthentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.enableAuthentication"></a>

```csharp
public object EnableAuthentication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#enable_authentication RedisCache#enable_authentication}.

---

##### `MaxfragmentationmemoryReserved`<sup>Optional</sup> <a name="MaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved"></a>

```csharp
public double MaxfragmentationmemoryReserved { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}.

---

##### `MaxmemoryDelta`<sup>Optional</sup> <a name="MaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta"></a>

```csharp
public double MaxmemoryDelta { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}.

---

##### `MaxmemoryPolicy`<sup>Optional</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy"></a>

```csharp
public string MaxmemoryPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}.

---

##### `MaxmemoryReserved`<sup>Optional</sup> <a name="MaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved"></a>

```csharp
public double MaxmemoryReserved { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}.

---

##### `NotifyKeyspaceEvents`<sup>Optional</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents"></a>

```csharp
public string NotifyKeyspaceEvents { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}.

---

##### `RdbBackupEnabled`<sup>Optional</sup> <a name="RdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled"></a>

```csharp
public object RdbBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}.

---

##### `RdbBackupFrequency`<sup>Optional</sup> <a name="RdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency"></a>

```csharp
public double RdbBackupFrequency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}.

---

##### `RdbBackupMaxSnapshotCount`<sup>Optional</sup> <a name="RdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount"></a>

```csharp
public double RdbBackupMaxSnapshotCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}.

---

##### `RdbStorageConnectionString`<sup>Optional</sup> <a name="RdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString"></a>

```csharp
public string RdbStorageConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}.

---

### RedisCacheTimeouts <a name="RedisCacheTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#create RedisCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#delete RedisCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#read RedisCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#update RedisCache#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#create RedisCache#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#delete RedisCache#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#read RedisCache#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/redis_cache#update RedisCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisCacheIdentityOutputReference <a name="RedisCacheIdentityOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue"></a>

```csharp
public RedisCacheIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---


### RedisCachePatchScheduleList <a name="RedisCachePatchScheduleList" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCachePatchScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get"></a>

```csharp
private RedisCachePatchScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RedisCachePatchScheduleOutputReference <a name="RedisCachePatchScheduleOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCachePatchScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetStartHourUtc` <a name="ResetStartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc"></a>

```csharp
private void ResetStartHourUtc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput">StartHourUtcInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc">StartHourUtc</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput"></a>

```csharp
public string MaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `StartHourUtcInput`<sup>Optional</sup> <a name="StartHourUtcInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput"></a>

```csharp
public double StartHourUtcInput { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; }
```

- *Type:* string

---

##### `StartHourUtc`<sup>Required</sup> <a name="StartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc"></a>

```csharp
public double StartHourUtc { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RedisCacheRedisConfigurationOutputReference <a name="RedisCacheRedisConfigurationOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheRedisConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled">ResetAofBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0">ResetAofStorageConnectionString0</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1">ResetAofStorageConnectionString1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetEnableAuthentication">ResetEnableAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved">ResetMaxfragmentationmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta">ResetMaxmemoryDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy">ResetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved">ResetMaxmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents">ResetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled">ResetRdbBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency">ResetRdbBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount">ResetRdbBackupMaxSnapshotCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString">ResetRdbStorageConnectionString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAofBackupEnabled` <a name="ResetAofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled"></a>

```csharp
private void ResetAofBackupEnabled()
```

##### `ResetAofStorageConnectionString0` <a name="ResetAofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0"></a>

```csharp
private void ResetAofStorageConnectionString0()
```

##### `ResetAofStorageConnectionString1` <a name="ResetAofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1"></a>

```csharp
private void ResetAofStorageConnectionString1()
```

##### `ResetEnableAuthentication` <a name="ResetEnableAuthentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetEnableAuthentication"></a>

```csharp
private void ResetEnableAuthentication()
```

##### `ResetMaxfragmentationmemoryReserved` <a name="ResetMaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved"></a>

```csharp
private void ResetMaxfragmentationmemoryReserved()
```

##### `ResetMaxmemoryDelta` <a name="ResetMaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta"></a>

```csharp
private void ResetMaxmemoryDelta()
```

##### `ResetMaxmemoryPolicy` <a name="ResetMaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy"></a>

```csharp
private void ResetMaxmemoryPolicy()
```

##### `ResetMaxmemoryReserved` <a name="ResetMaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved"></a>

```csharp
private void ResetMaxmemoryReserved()
```

##### `ResetNotifyKeyspaceEvents` <a name="ResetNotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents"></a>

```csharp
private void ResetNotifyKeyspaceEvents()
```

##### `ResetRdbBackupEnabled` <a name="ResetRdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled"></a>

```csharp
private void ResetRdbBackupEnabled()
```

##### `ResetRdbBackupFrequency` <a name="ResetRdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency"></a>

```csharp
private void ResetRdbBackupFrequency()
```

##### `ResetRdbBackupMaxSnapshotCount` <a name="ResetRdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount"></a>

```csharp
private void ResetRdbBackupMaxSnapshotCount()
```

##### `ResetRdbStorageConnectionString` <a name="ResetRdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString"></a>

```csharp
private void ResetRdbStorageConnectionString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients">Maxclients</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput">AofBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input">AofStorageConnectionString0Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input">AofStorageConnectionString1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthenticationInput">EnableAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput">MaxfragmentationmemoryReservedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput">MaxmemoryDeltaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput">MaxmemoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput">MaxmemoryReservedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput">NotifyKeyspaceEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput">RdbBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput">RdbBackupFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput">RdbBackupMaxSnapshotCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput">RdbStorageConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled">AofBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0">AofStorageConnectionString0</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1">AofStorageConnectionString1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthentication">EnableAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved">MaxfragmentationmemoryReserved</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta">MaxmemoryDelta</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved">MaxmemoryReserved</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled">RdbBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency">RdbBackupFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount">RdbBackupMaxSnapshotCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString">RdbStorageConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maxclients`<sup>Required</sup> <a name="Maxclients" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients"></a>

```csharp
public double Maxclients { get; }
```

- *Type:* double

---

##### `AofBackupEnabledInput`<sup>Optional</sup> <a name="AofBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput"></a>

```csharp
public object AofBackupEnabledInput { get; }
```

- *Type:* object

---

##### `AofStorageConnectionString0Input`<sup>Optional</sup> <a name="AofStorageConnectionString0Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input"></a>

```csharp
public string AofStorageConnectionString0Input { get; }
```

- *Type:* string

---

##### `AofStorageConnectionString1Input`<sup>Optional</sup> <a name="AofStorageConnectionString1Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input"></a>

```csharp
public string AofStorageConnectionString1Input { get; }
```

- *Type:* string

---

##### `EnableAuthenticationInput`<sup>Optional</sup> <a name="EnableAuthenticationInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthenticationInput"></a>

```csharp
public object EnableAuthenticationInput { get; }
```

- *Type:* object

---

##### `MaxfragmentationmemoryReservedInput`<sup>Optional</sup> <a name="MaxfragmentationmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput"></a>

```csharp
public double MaxfragmentationmemoryReservedInput { get; }
```

- *Type:* double

---

##### `MaxmemoryDeltaInput`<sup>Optional</sup> <a name="MaxmemoryDeltaInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput"></a>

```csharp
public double MaxmemoryDeltaInput { get; }
```

- *Type:* double

---

##### `MaxmemoryPolicyInput`<sup>Optional</sup> <a name="MaxmemoryPolicyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput"></a>

```csharp
public string MaxmemoryPolicyInput { get; }
```

- *Type:* string

---

##### `MaxmemoryReservedInput`<sup>Optional</sup> <a name="MaxmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput"></a>

```csharp
public double MaxmemoryReservedInput { get; }
```

- *Type:* double

---

##### `NotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="NotifyKeyspaceEventsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput"></a>

```csharp
public string NotifyKeyspaceEventsInput { get; }
```

- *Type:* string

---

##### `RdbBackupEnabledInput`<sup>Optional</sup> <a name="RdbBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput"></a>

```csharp
public object RdbBackupEnabledInput { get; }
```

- *Type:* object

---

##### `RdbBackupFrequencyInput`<sup>Optional</sup> <a name="RdbBackupFrequencyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput"></a>

```csharp
public double RdbBackupFrequencyInput { get; }
```

- *Type:* double

---

##### `RdbBackupMaxSnapshotCountInput`<sup>Optional</sup> <a name="RdbBackupMaxSnapshotCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput"></a>

```csharp
public double RdbBackupMaxSnapshotCountInput { get; }
```

- *Type:* double

---

##### `RdbStorageConnectionStringInput`<sup>Optional</sup> <a name="RdbStorageConnectionStringInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput"></a>

```csharp
public string RdbStorageConnectionStringInput { get; }
```

- *Type:* string

---

##### `AofBackupEnabled`<sup>Required</sup> <a name="AofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled"></a>

```csharp
public object AofBackupEnabled { get; }
```

- *Type:* object

---

##### `AofStorageConnectionString0`<sup>Required</sup> <a name="AofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0"></a>

```csharp
public string AofStorageConnectionString0 { get; }
```

- *Type:* string

---

##### `AofStorageConnectionString1`<sup>Required</sup> <a name="AofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1"></a>

```csharp
public string AofStorageConnectionString1 { get; }
```

- *Type:* string

---

##### `EnableAuthentication`<sup>Required</sup> <a name="EnableAuthentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthentication"></a>

```csharp
public object EnableAuthentication { get; }
```

- *Type:* object

---

##### `MaxfragmentationmemoryReserved`<sup>Required</sup> <a name="MaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved"></a>

```csharp
public double MaxfragmentationmemoryReserved { get; }
```

- *Type:* double

---

##### `MaxmemoryDelta`<sup>Required</sup> <a name="MaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta"></a>

```csharp
public double MaxmemoryDelta { get; }
```

- *Type:* double

---

##### `MaxmemoryPolicy`<sup>Required</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy"></a>

```csharp
public string MaxmemoryPolicy { get; }
```

- *Type:* string

---

##### `MaxmemoryReserved`<sup>Required</sup> <a name="MaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved"></a>

```csharp
public double MaxmemoryReserved { get; }
```

- *Type:* double

---

##### `NotifyKeyspaceEvents`<sup>Required</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents"></a>

```csharp
public string NotifyKeyspaceEvents { get; }
```

- *Type:* string

---

##### `RdbBackupEnabled`<sup>Required</sup> <a name="RdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled"></a>

```csharp
public object RdbBackupEnabled { get; }
```

- *Type:* object

---

##### `RdbBackupFrequency`<sup>Required</sup> <a name="RdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency"></a>

```csharp
public double RdbBackupFrequency { get; }
```

- *Type:* double

---

##### `RdbBackupMaxSnapshotCount`<sup>Required</sup> <a name="RdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount"></a>

```csharp
public double RdbBackupMaxSnapshotCount { get; }
```

- *Type:* double

---

##### `RdbStorageConnectionString`<sup>Required</sup> <a name="RdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString"></a>

```csharp
public string RdbStorageConnectionString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue"></a>

```csharp
public RedisCacheRedisConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---


### RedisCacheTimeoutsOutputReference <a name="RedisCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



