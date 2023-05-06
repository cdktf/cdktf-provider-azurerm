# `azurerm_cosmosdb_sql_container`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_sql_container`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container).

# `cosmosdbSqlContainer` Submodule <a name="`cosmosdbSqlContainer` Submodule" id="@cdktf/provider-azurerm.cosmosdbSqlContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbSqlContainer <a name="CosmosdbSqlContainer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container azurerm_cosmosdb_sql_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainer(Construct Scope, string Id, CosmosdbSqlContainerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig">CosmosdbSqlContainerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig">CosmosdbSqlContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putAutoscaleSettings">PutAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putConflictResolutionPolicy">PutConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putIndexingPolicy">PutIndexingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putUniqueKey">PutUniqueKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAnalyticalStorageTtl">ResetAnalyticalStorageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAutoscaleSettings">ResetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetConflictResolutionPolicy">ResetConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetIndexingPolicy">ResetIndexingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetPartitionKeyVersion">ResetPartitionKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetUniqueKey">ResetUniqueKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoscaleSettings` <a name="PutAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putAutoscaleSettings"></a>

```csharp
private void PutAutoscaleSettings(CosmosdbSqlContainerAutoscaleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

---

##### `PutConflictResolutionPolicy` <a name="PutConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putConflictResolutionPolicy"></a>

```csharp
private void PutConflictResolutionPolicy(CosmosdbSqlContainerConflictResolutionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putConflictResolutionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

---

##### `PutIndexingPolicy` <a name="PutIndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putIndexingPolicy"></a>

```csharp
private void PutIndexingPolicy(CosmosdbSqlContainerIndexingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putIndexingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putTimeouts"></a>

```csharp
private void PutTimeouts(CosmosdbSqlContainerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a>

---

##### `PutUniqueKey` <a name="PutUniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putUniqueKey"></a>

```csharp
private void PutUniqueKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putUniqueKey.parameter.value"></a>

- *Type:* object

---

##### `ResetAnalyticalStorageTtl` <a name="ResetAnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAnalyticalStorageTtl"></a>

```csharp
private void ResetAnalyticalStorageTtl()
```

##### `ResetAutoscaleSettings` <a name="ResetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAutoscaleSettings"></a>

```csharp
private void ResetAutoscaleSettings()
```

##### `ResetConflictResolutionPolicy` <a name="ResetConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetConflictResolutionPolicy"></a>

```csharp
private void ResetConflictResolutionPolicy()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexingPolicy` <a name="ResetIndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetIndexingPolicy"></a>

```csharp
private void ResetIndexingPolicy()
```

##### `ResetPartitionKeyVersion` <a name="ResetPartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetPartitionKeyVersion"></a>

```csharp
private void ResetPartitionKeyVersion()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUniqueKey` <a name="ResetUniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetUniqueKey"></a>

```csharp
private void ResetUniqueKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbSqlContainer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbSqlContainer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbSqlContainer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference">CosmosdbSqlContainerAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicy">ConflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference">CosmosdbSqlContainerConflictResolutionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicy">IndexingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference">CosmosdbSqlContainerIndexingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference">CosmosdbSqlContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKey">UniqueKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList">CosmosdbSqlContainerUniqueKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtlInput">AnalyticalStorageTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettingsInput">AutoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicyInput">ConflictResolutionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicyInput">IndexingPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPathInput">PartitionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersionInput">PartitionKeyVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKeyInput">UniqueKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtl">AnalyticalStorageTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersion">PartitionKeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscaleSettings`<sup>Required</sup> <a name="AutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettings"></a>

```csharp
public CosmosdbSqlContainerAutoscaleSettingsOutputReference AutoscaleSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference">CosmosdbSqlContainerAutoscaleSettingsOutputReference</a>

---

##### `ConflictResolutionPolicy`<sup>Required</sup> <a name="ConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicy"></a>

```csharp
public CosmosdbSqlContainerConflictResolutionPolicyOutputReference ConflictResolutionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference">CosmosdbSqlContainerConflictResolutionPolicyOutputReference</a>

---

##### `IndexingPolicy`<sup>Required</sup> <a name="IndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicy"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicyOutputReference IndexingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference">CosmosdbSqlContainerIndexingPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeouts"></a>

```csharp
public CosmosdbSqlContainerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference">CosmosdbSqlContainerTimeoutsOutputReference</a>

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKey"></a>

```csharp
public CosmosdbSqlContainerUniqueKeyList UniqueKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList">CosmosdbSqlContainerUniqueKeyList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AnalyticalStorageTtlInput`<sup>Optional</sup> <a name="AnalyticalStorageTtlInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtlInput"></a>

```csharp
public double AnalyticalStorageTtlInput { get; }
```

- *Type:* double

---

##### `AutoscaleSettingsInput`<sup>Optional</sup> <a name="AutoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettingsInput"></a>

```csharp
public CosmosdbSqlContainerAutoscaleSettings AutoscaleSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

---

##### `ConflictResolutionPolicyInput`<sup>Optional</sup> <a name="ConflictResolutionPolicyInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicyInput"></a>

```csharp
public CosmosdbSqlContainerConflictResolutionPolicy ConflictResolutionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexingPolicyInput`<sup>Optional</sup> <a name="IndexingPolicyInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicyInput"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicy IndexingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionKeyPathInput`<sup>Optional</sup> <a name="PartitionKeyPathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPathInput"></a>

```csharp
public string PartitionKeyPathInput { get; }
```

- *Type:* string

---

##### `PartitionKeyVersionInput`<sup>Optional</sup> <a name="PartitionKeyVersionInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersionInput"></a>

```csharp
public double PartitionKeyVersionInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UniqueKeyInput`<sup>Optional</sup> <a name="UniqueKeyInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKeyInput"></a>

```csharp
public object UniqueKeyInput { get; }
```

- *Type:* object

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AnalyticalStorageTtl`<sup>Required</sup> <a name="AnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtl"></a>

```csharp
public double AnalyticalStorageTtl { get; }
```

- *Type:* double

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPath"></a>

```csharp
public string PartitionKeyPath { get; }
```

- *Type:* string

---

##### `PartitionKeyVersion`<sup>Required</sup> <a name="PartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersion"></a>

```csharp
public double PartitionKeyVersion { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbSqlContainerAutoscaleSettings <a name="CosmosdbSqlContainerAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerAutoscaleSettings {
    double MaxThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings.property.maxThroughput">MaxThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#max_throughput CosmosdbSqlContainer#max_throughput}. |

---

##### `MaxThroughput`<sup>Optional</sup> <a name="MaxThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings.property.maxThroughput"></a>

```csharp
public double MaxThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#max_throughput CosmosdbSqlContainer#max_throughput}.

---

### CosmosdbSqlContainerConfig <a name="CosmosdbSqlContainerConfig" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string DatabaseName,
    string Name,
    string PartitionKeyPath,
    string ResourceGroupName,
    double AnalyticalStorageTtl = null,
    CosmosdbSqlContainerAutoscaleSettings AutoscaleSettings = null,
    CosmosdbSqlContainerConflictResolutionPolicy ConflictResolutionPolicy = null,
    double DefaultTtl = null,
    string Id = null,
    CosmosdbSqlContainerIndexingPolicy IndexingPolicy = null,
    double PartitionKeyVersion = null,
    double Throughput = null,
    CosmosdbSqlContainerTimeouts Timeouts = null,
    object UniqueKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#account_name CosmosdbSqlContainer#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#database_name CosmosdbSqlContainer#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#name CosmosdbSqlContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#partition_key_path CosmosdbSqlContainer#partition_key_path}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#resource_group_name CosmosdbSqlContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.analyticalStorageTtl">AnalyticalStorageTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.conflictResolutionPolicy">ConflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a></code> | conflict_resolution_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#default_ttl CosmosdbSqlContainer#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#id CosmosdbSqlContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.indexingPolicy">IndexingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a></code> | indexing_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyVersion">PartitionKeyVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#partition_key_version CosmosdbSqlContainer#partition_key_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#throughput CosmosdbSqlContainer#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.uniqueKey">UniqueKey</a></code> | <code>object</code> | unique_key block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#account_name CosmosdbSqlContainer#account_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#database_name CosmosdbSqlContainer#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#name CosmosdbSqlContainer#name}.

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyPath"></a>

```csharp
public string PartitionKeyPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#partition_key_path CosmosdbSqlContainer#partition_key_path}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#resource_group_name CosmosdbSqlContainer#resource_group_name}.

---

##### `AnalyticalStorageTtl`<sup>Optional</sup> <a name="AnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.analyticalStorageTtl"></a>

```csharp
public double AnalyticalStorageTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}.

---

##### `AutoscaleSettings`<sup>Optional</sup> <a name="AutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.autoscaleSettings"></a>

```csharp
public CosmosdbSqlContainerAutoscaleSettings AutoscaleSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#autoscale_settings CosmosdbSqlContainer#autoscale_settings}

---

##### `ConflictResolutionPolicy`<sup>Optional</sup> <a name="ConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.conflictResolutionPolicy"></a>

```csharp
public CosmosdbSqlContainerConflictResolutionPolicy ConflictResolutionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

conflict_resolution_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#conflict_resolution_policy CosmosdbSqlContainer#conflict_resolution_policy}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#default_ttl CosmosdbSqlContainer#default_ttl}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#id CosmosdbSqlContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexingPolicy`<sup>Optional</sup> <a name="IndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.indexingPolicy"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicy IndexingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

indexing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#indexing_policy CosmosdbSqlContainer#indexing_policy}

---

##### `PartitionKeyVersion`<sup>Optional</sup> <a name="PartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyVersion"></a>

```csharp
public double PartitionKeyVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#partition_key_version CosmosdbSqlContainer#partition_key_version}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#throughput CosmosdbSqlContainer#throughput}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.timeouts"></a>

```csharp
public CosmosdbSqlContainerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#timeouts CosmosdbSqlContainer#timeouts}

---

##### `UniqueKey`<sup>Optional</sup> <a name="UniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.uniqueKey"></a>

```csharp
public object UniqueKey { get; set; }
```

- *Type:* object

unique_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#unique_key CosmosdbSqlContainer#unique_key}

---

### CosmosdbSqlContainerConflictResolutionPolicy <a name="CosmosdbSqlContainerConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerConflictResolutionPolicy {
    string Mode,
    string ConflictResolutionPath = null,
    string ConflictResolutionProcedure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#mode CosmosdbSqlContainer#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionPath">ConflictResolutionPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#conflict_resolution_path CosmosdbSqlContainer#conflict_resolution_path}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionProcedure">ConflictResolutionProcedure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#conflict_resolution_procedure CosmosdbSqlContainer#conflict_resolution_procedure}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#mode CosmosdbSqlContainer#mode}.

---

##### `ConflictResolutionPath`<sup>Optional</sup> <a name="ConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionPath"></a>

```csharp
public string ConflictResolutionPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#conflict_resolution_path CosmosdbSqlContainer#conflict_resolution_path}.

---

##### `ConflictResolutionProcedure`<sup>Optional</sup> <a name="ConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionProcedure"></a>

```csharp
public string ConflictResolutionProcedure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#conflict_resolution_procedure CosmosdbSqlContainer#conflict_resolution_procedure}.

---

### CosmosdbSqlContainerIndexingPolicy <a name="CosmosdbSqlContainerIndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicy {
    object CompositeIndex = null,
    object ExcludedPath = null,
    object IncludedPath = null,
    string IndexingMode = null,
    object SpatialIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.compositeIndex">CompositeIndex</a></code> | <code>object</code> | composite_index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.excludedPath">ExcludedPath</a></code> | <code>object</code> | excluded_path block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.includedPath">IncludedPath</a></code> | <code>object</code> | included_path block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.indexingMode">IndexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#indexing_mode CosmosdbSqlContainer#indexing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.spatialIndex">SpatialIndex</a></code> | <code>object</code> | spatial_index block. |

---

##### `CompositeIndex`<sup>Optional</sup> <a name="CompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.compositeIndex"></a>

```csharp
public object CompositeIndex { get; set; }
```

- *Type:* object

composite_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#composite_index CosmosdbSqlContainer#composite_index}

---

##### `ExcludedPath`<sup>Optional</sup> <a name="ExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.excludedPath"></a>

```csharp
public object ExcludedPath { get; set; }
```

- *Type:* object

excluded_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#excluded_path CosmosdbSqlContainer#excluded_path}

---

##### `IncludedPath`<sup>Optional</sup> <a name="IncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.includedPath"></a>

```csharp
public object IncludedPath { get; set; }
```

- *Type:* object

included_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#included_path CosmosdbSqlContainer#included_path}

---

##### `IndexingMode`<sup>Optional</sup> <a name="IndexingMode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.indexingMode"></a>

```csharp
public string IndexingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#indexing_mode CosmosdbSqlContainer#indexing_mode}.

---

##### `SpatialIndex`<sup>Optional</sup> <a name="SpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.spatialIndex"></a>

```csharp
public object SpatialIndex { get; set; }
```

- *Type:* object

spatial_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#spatial_index CosmosdbSqlContainer#spatial_index}

---

### CosmosdbSqlContainerIndexingPolicyCompositeIndex <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyCompositeIndex {
    object Index
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex.property.index">Index</a></code> | <code>object</code> | index block. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex.property.index"></a>

```csharp
public object Index { get; set; }
```

- *Type:* object

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#index CosmosdbSqlContainer#index}

---

### CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex {
    string Order,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.order">Order</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#order CosmosdbSqlContainer#order}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#order CosmosdbSqlContainer#order}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerIndexingPolicyExcludedPath <a name="CosmosdbSqlContainerIndexingPolicyExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyExcludedPath {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerIndexingPolicyIncludedPath <a name="CosmosdbSqlContainerIndexingPolicyIncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyIncludedPath {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerIndexingPolicySpatialIndex <a name="CosmosdbSqlContainerIndexingPolicySpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicySpatialIndex {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerTimeouts <a name="CosmosdbSqlContainerTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#create CosmosdbSqlContainer#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#delete CosmosdbSqlContainer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#read CosmosdbSqlContainer#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#update CosmosdbSqlContainer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#create CosmosdbSqlContainer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#delete CosmosdbSqlContainer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#read CosmosdbSqlContainer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#update CosmosdbSqlContainer#update}.

---

### CosmosdbSqlContainerUniqueKey <a name="CosmosdbSqlContainerUniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerUniqueKey {
    string[] Paths
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey.property.paths">Paths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#paths CosmosdbSqlContainer#paths}. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_sql_container#paths CosmosdbSqlContainer#paths}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbSqlContainerAutoscaleSettingsOutputReference <a name="CosmosdbSqlContainerAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerAutoscaleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resetMaxThroughput">ResetMaxThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxThroughput` <a name="ResetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```csharp
private void ResetMaxThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughputInput">MaxThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughput">MaxThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxThroughputInput`<sup>Optional</sup> <a name="MaxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```csharp
public double MaxThroughputInput { get; }
```

- *Type:* double

---

##### `MaxThroughput`<sup>Required</sup> <a name="MaxThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```csharp
public double MaxThroughput { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.internalValue"></a>

```csharp
public CosmosdbSqlContainerAutoscaleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

---


### CosmosdbSqlContainerConflictResolutionPolicyOutputReference <a name="CosmosdbSqlContainerConflictResolutionPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerConflictResolutionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionPath">ResetConflictResolutionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure">ResetConflictResolutionProcedure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictResolutionPath` <a name="ResetConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionPath"></a>

```csharp
private void ResetConflictResolutionPath()
```

##### `ResetConflictResolutionProcedure` <a name="ResetConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure"></a>

```csharp
private void ResetConflictResolutionProcedure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput">ConflictResolutionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput">ConflictResolutionProcedureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPath">ConflictResolutionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure">ConflictResolutionProcedure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictResolutionPathInput`<sup>Optional</sup> <a name="ConflictResolutionPathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput"></a>

```csharp
public string ConflictResolutionPathInput { get; }
```

- *Type:* string

---

##### `ConflictResolutionProcedureInput`<sup>Optional</sup> <a name="ConflictResolutionProcedureInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput"></a>

```csharp
public string ConflictResolutionProcedureInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ConflictResolutionPath`<sup>Required</sup> <a name="ConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPath"></a>

```csharp
public string ConflictResolutionPath { get; }
```

- *Type:* string

---

##### `ConflictResolutionProcedure`<sup>Required</sup> <a name="ConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure"></a>

```csharp
public string ConflictResolutionProcedure { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.internalValue"></a>

```csharp
public CosmosdbSqlContainerConflictResolutionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.get"></a>

```csharp
private CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexList <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.get"></a>

```csharp
private CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.putIndex">PutIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndex` <a name="PutIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.putIndex"></a>

```csharp
private void PutIndex(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.putIndex.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.index">Index</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.indexInput">IndexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.index"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList Index { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList</a>

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.indexInput"></a>

```csharp
public object IndexInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyExcludedPathList <a name="CosmosdbSqlContainerIndexingPolicyExcludedPathList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyExcludedPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.get"></a>

```csharp
private CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference <a name="CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyIncludedPathList <a name="CosmosdbSqlContainerIndexingPolicyIncludedPathList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyIncludedPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.get"></a>

```csharp
private CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference <a name="CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicyOutputReference <a name="CosmosdbSqlContainerIndexingPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putCompositeIndex">PutCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putExcludedPath">PutExcludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putIncludedPath">PutIncludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putSpatialIndex">PutSpatialIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetCompositeIndex">ResetCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetExcludedPath">ResetExcludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIncludedPath">ResetIncludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIndexingMode">ResetIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetSpatialIndex">ResetSpatialIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompositeIndex` <a name="PutCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putCompositeIndex"></a>

```csharp
private void PutCompositeIndex(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putCompositeIndex.parameter.value"></a>

- *Type:* object

---

##### `PutExcludedPath` <a name="PutExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putExcludedPath"></a>

```csharp
private void PutExcludedPath(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putExcludedPath.parameter.value"></a>

- *Type:* object

---

##### `PutIncludedPath` <a name="PutIncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putIncludedPath"></a>

```csharp
private void PutIncludedPath(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putIncludedPath.parameter.value"></a>

- *Type:* object

---

##### `PutSpatialIndex` <a name="PutSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putSpatialIndex"></a>

```csharp
private void PutSpatialIndex(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putSpatialIndex.parameter.value"></a>

- *Type:* object

---

##### `ResetCompositeIndex` <a name="ResetCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetCompositeIndex"></a>

```csharp
private void ResetCompositeIndex()
```

##### `ResetExcludedPath` <a name="ResetExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetExcludedPath"></a>

```csharp
private void ResetExcludedPath()
```

##### `ResetIncludedPath` <a name="ResetIncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIncludedPath"></a>

```csharp
private void ResetIncludedPath()
```

##### `ResetIndexingMode` <a name="ResetIndexingMode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIndexingMode"></a>

```csharp
private void ResetIndexingMode()
```

##### `ResetSpatialIndex` <a name="ResetSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetSpatialIndex"></a>

```csharp
private void ResetSpatialIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndex">CompositeIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPath">ExcludedPath</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList">CosmosdbSqlContainerIndexingPolicyExcludedPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPath">IncludedPath</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList">CosmosdbSqlContainerIndexingPolicyIncludedPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndex">SpatialIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList">CosmosdbSqlContainerIndexingPolicySpatialIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndexInput">CompositeIndexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPathInput">ExcludedPathInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPathInput">IncludedPathInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingModeInput">IndexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndexInput">SpatialIndexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingMode">IndexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompositeIndex`<sup>Required</sup> <a name="CompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndex"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicyCompositeIndexList CompositeIndex { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexList</a>

---

##### `ExcludedPath`<sup>Required</sup> <a name="ExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPath"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicyExcludedPathList ExcludedPath { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList">CosmosdbSqlContainerIndexingPolicyExcludedPathList</a>

---

##### `IncludedPath`<sup>Required</sup> <a name="IncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPath"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicyIncludedPathList IncludedPath { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList">CosmosdbSqlContainerIndexingPolicyIncludedPathList</a>

---

##### `SpatialIndex`<sup>Required</sup> <a name="SpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndex"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicySpatialIndexList SpatialIndex { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList">CosmosdbSqlContainerIndexingPolicySpatialIndexList</a>

---

##### `CompositeIndexInput`<sup>Optional</sup> <a name="CompositeIndexInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndexInput"></a>

```csharp
public object CompositeIndexInput { get; }
```

- *Type:* object

---

##### `ExcludedPathInput`<sup>Optional</sup> <a name="ExcludedPathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPathInput"></a>

```csharp
public object ExcludedPathInput { get; }
```

- *Type:* object

---

##### `IncludedPathInput`<sup>Optional</sup> <a name="IncludedPathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPathInput"></a>

```csharp
public object IncludedPathInput { get; }
```

- *Type:* object

---

##### `IndexingModeInput`<sup>Optional</sup> <a name="IndexingModeInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingModeInput"></a>

```csharp
public string IndexingModeInput { get; }
```

- *Type:* string

---

##### `SpatialIndexInput`<sup>Optional</sup> <a name="SpatialIndexInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndexInput"></a>

```csharp
public object SpatialIndexInput { get; }
```

- *Type:* object

---

##### `IndexingMode`<sup>Required</sup> <a name="IndexingMode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingMode"></a>

```csharp
public string IndexingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.internalValue"></a>

```csharp
public CosmosdbSqlContainerIndexingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

---


### CosmosdbSqlContainerIndexingPolicySpatialIndexList <a name="CosmosdbSqlContainerIndexingPolicySpatialIndexList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicySpatialIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.get"></a>

```csharp
private CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference <a name="CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerTimeoutsOutputReference <a name="CosmosdbSqlContainerTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerUniqueKeyList <a name="CosmosdbSqlContainerUniqueKeyList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerUniqueKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.get"></a>

```csharp
private CosmosdbSqlContainerUniqueKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbSqlContainerUniqueKeyOutputReference <a name="CosmosdbSqlContainerUniqueKeyOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbSqlContainerUniqueKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



