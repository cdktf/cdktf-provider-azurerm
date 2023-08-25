# `azurerm_redis_enterprise_cluster`

Refer to the Terraform Registory for docs: [`azurerm_redis_enterprise_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster).

# `redisEnterpriseCluster` Submodule <a name="`redisEnterpriseCluster` Submodule" id="@cdktf/provider-azurerm.redisEnterpriseCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisEnterpriseCluster <a name="RedisEnterpriseCluster" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster azurerm_redis_enterprise_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisEnterpriseCluster(Construct Scope, string Id, RedisEnterpriseClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig">RedisEnterpriseClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig">RedisEnterpriseClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(RedisEnterpriseClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetMinimumTlsVersion"></a>

```csharp
private void ResetMinimumTlsVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisEnterpriseCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisEnterpriseCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisEnterpriseCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference">RedisEnterpriseClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeouts"></a>

```csharp
public RedisEnterpriseClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference">RedisEnterpriseClusterTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersionInput"></a>

```csharp
public string MinimumTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisEnterpriseClusterConfig <a name="RedisEnterpriseClusterConfig" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisEnterpriseClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string SkuName,
    string Id = null,
    string MinimumTlsVersion = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    RedisEnterpriseClusterTimeouts Timeouts = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#location RedisEnterpriseCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#name RedisEnterpriseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#resource_group_name RedisEnterpriseCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#sku_name RedisEnterpriseCluster#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#id RedisEnterpriseCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#minimum_tls_version RedisEnterpriseCluster#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#tags RedisEnterpriseCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#zones RedisEnterpriseCluster#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#location RedisEnterpriseCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#name RedisEnterpriseCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#resource_group_name RedisEnterpriseCluster#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#sku_name RedisEnterpriseCluster#sku_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#id RedisEnterpriseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#minimum_tls_version RedisEnterpriseCluster#minimum_tls_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#tags RedisEnterpriseCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.timeouts"></a>

```csharp
public RedisEnterpriseClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#timeouts RedisEnterpriseCluster#timeouts}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#zones RedisEnterpriseCluster#zones}.

---

### RedisEnterpriseClusterTimeouts <a name="RedisEnterpriseClusterTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisEnterpriseClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#create RedisEnterpriseCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#delete RedisEnterpriseCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#read RedisEnterpriseCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#update RedisEnterpriseCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#create RedisEnterpriseCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#delete RedisEnterpriseCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#read RedisEnterpriseCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/redis_enterprise_cluster#update RedisEnterpriseCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisEnterpriseClusterTimeoutsOutputReference <a name="RedisEnterpriseClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisEnterpriseClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



