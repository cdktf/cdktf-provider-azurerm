# `azurerm_cosmosdb_cassandra_datacenter`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_cassandra_datacenter`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter).

# `cosmosdbCassandraDatacenter` Submodule <a name="`cosmosdbCassandraDatacenter` Submodule" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraDatacenter <a name="CosmosdbCassandraDatacenter" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter azurerm_cosmosdb_cassandra_datacenter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraDatacenter(Construct Scope, string Id, CosmosdbCassandraDatacenterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig">CosmosdbCassandraDatacenterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig">CosmosdbCassandraDatacenterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled">ResetAvailabilityZonesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri">ResetBackupStorageCustomerKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment">ResetBase64EncodedYamlFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount">ResetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku">ResetDiskSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri">ResetManagedDiskCustomerKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts"></a>

```csharp
private void PutTimeouts(CosmosdbCassandraDatacenterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

---

##### `ResetAvailabilityZonesEnabled` <a name="ResetAvailabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled"></a>

```csharp
private void ResetAvailabilityZonesEnabled()
```

##### `ResetBackupStorageCustomerKeyUri` <a name="ResetBackupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri"></a>

```csharp
private void ResetBackupStorageCustomerKeyUri()
```

##### `ResetBase64EncodedYamlFragment` <a name="ResetBase64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment"></a>

```csharp
private void ResetBase64EncodedYamlFragment()
```

##### `ResetDiskCount` <a name="ResetDiskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount"></a>

```csharp
private void ResetDiskCount()
```

##### `ResetDiskSku` <a name="ResetDiskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku"></a>

```csharp
private void ResetDiskSku()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedDiskCustomerKeyUri` <a name="ResetManagedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri"></a>

```csharp
private void ResetManagedDiskCustomerKeyUri()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbCassandraDatacenter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbCassandraDatacenter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbCassandraDatacenter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput">AvailabilityZonesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput">BackupStorageCustomerKeyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput">Base64EncodedYamlFragmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput">CassandraClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput">DelegatedManagementSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput">DiskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput">DiskSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput">ManagedDiskCustomerKeyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled">AvailabilityZonesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri">BackupStorageCustomerKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment">Base64EncodedYamlFragment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId">CassandraClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId">DelegatedManagementSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount">DiskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku">DiskSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri">ManagedDiskCustomerKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts"></a>

```csharp
public CosmosdbCassandraDatacenterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a>

---

##### `AvailabilityZonesEnabledInput`<sup>Optional</sup> <a name="AvailabilityZonesEnabledInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput"></a>

```csharp
public object AvailabilityZonesEnabledInput { get; }
```

- *Type:* object

---

##### `BackupStorageCustomerKeyUriInput`<sup>Optional</sup> <a name="BackupStorageCustomerKeyUriInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput"></a>

```csharp
public string BackupStorageCustomerKeyUriInput { get; }
```

- *Type:* string

---

##### `Base64EncodedYamlFragmentInput`<sup>Optional</sup> <a name="Base64EncodedYamlFragmentInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput"></a>

```csharp
public string Base64EncodedYamlFragmentInput { get; }
```

- *Type:* string

---

##### `CassandraClusterIdInput`<sup>Optional</sup> <a name="CassandraClusterIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput"></a>

```csharp
public string CassandraClusterIdInput { get; }
```

- *Type:* string

---

##### `DelegatedManagementSubnetIdInput`<sup>Optional</sup> <a name="DelegatedManagementSubnetIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput"></a>

```csharp
public string DelegatedManagementSubnetIdInput { get; }
```

- *Type:* string

---

##### `DiskCountInput`<sup>Optional</sup> <a name="DiskCountInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput"></a>

```csharp
public double DiskCountInput { get; }
```

- *Type:* double

---

##### `DiskSkuInput`<sup>Optional</sup> <a name="DiskSkuInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput"></a>

```csharp
public string DiskSkuInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedDiskCustomerKeyUriInput`<sup>Optional</sup> <a name="ManagedDiskCustomerKeyUriInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput"></a>

```csharp
public string ManagedDiskCustomerKeyUriInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityZonesEnabled`<sup>Required</sup> <a name="AvailabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled"></a>

```csharp
public object AvailabilityZonesEnabled { get; }
```

- *Type:* object

---

##### `BackupStorageCustomerKeyUri`<sup>Required</sup> <a name="BackupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri"></a>

```csharp
public string BackupStorageCustomerKeyUri { get; }
```

- *Type:* string

---

##### `Base64EncodedYamlFragment`<sup>Required</sup> <a name="Base64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment"></a>

```csharp
public string Base64EncodedYamlFragment { get; }
```

- *Type:* string

---

##### `CassandraClusterId`<sup>Required</sup> <a name="CassandraClusterId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId"></a>

```csharp
public string CassandraClusterId { get; }
```

- *Type:* string

---

##### `DelegatedManagementSubnetId`<sup>Required</sup> <a name="DelegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId"></a>

```csharp
public string DelegatedManagementSubnetId { get; }
```

- *Type:* string

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount"></a>

```csharp
public double DiskCount { get; }
```

- *Type:* double

---

##### `DiskSku`<sup>Required</sup> <a name="DiskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku"></a>

```csharp
public string DiskSku { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedDiskCustomerKeyUri`<sup>Required</sup> <a name="ManagedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri"></a>

```csharp
public string ManagedDiskCustomerKeyUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraDatacenterConfig <a name="CosmosdbCassandraDatacenterConfig" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraDatacenterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CassandraClusterId,
    string DelegatedManagementSubnetId,
    string Location,
    string Name,
    object AvailabilityZonesEnabled = null,
    string BackupStorageCustomerKeyUri = null,
    string Base64EncodedYamlFragment = null,
    double DiskCount = null,
    string DiskSku = null,
    string Id = null,
    string ManagedDiskCustomerKeyUri = null,
    double NodeCount = null,
    string SkuName = null,
    CosmosdbCassandraDatacenterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId">CassandraClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId">DelegatedManagementSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled">AvailabilityZonesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri">BackupStorageCustomerKeyUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment">Base64EncodedYamlFragment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount">DiskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku">DiskSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri">ManagedDiskCustomerKeyUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CassandraClusterId`<sup>Required</sup> <a name="CassandraClusterId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId"></a>

```csharp
public string CassandraClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}.

---

##### `DelegatedManagementSubnetId`<sup>Required</sup> <a name="DelegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId"></a>

```csharp
public string DelegatedManagementSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}.

---

##### `AvailabilityZonesEnabled`<sup>Optional</sup> <a name="AvailabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled"></a>

```csharp
public object AvailabilityZonesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}.

---

##### `BackupStorageCustomerKeyUri`<sup>Optional</sup> <a name="BackupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri"></a>

```csharp
public string BackupStorageCustomerKeyUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}.

---

##### `Base64EncodedYamlFragment`<sup>Optional</sup> <a name="Base64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment"></a>

```csharp
public string Base64EncodedYamlFragment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}.

---

##### `DiskCount`<sup>Optional</sup> <a name="DiskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount"></a>

```csharp
public double DiskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}.

---

##### `DiskSku`<sup>Optional</sup> <a name="DiskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku"></a>

```csharp
public string DiskSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedDiskCustomerKeyUri`<sup>Optional</sup> <a name="ManagedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri"></a>

```csharp
public string ManagedDiskCustomerKeyUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts"></a>

```csharp
public CosmosdbCassandraDatacenterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#timeouts CosmosdbCassandraDatacenter#timeouts}

---

### CosmosdbCassandraDatacenterTimeouts <a name="CosmosdbCassandraDatacenterTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraDatacenterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraDatacenterTimeoutsOutputReference <a name="CosmosdbCassandraDatacenterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraDatacenterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



