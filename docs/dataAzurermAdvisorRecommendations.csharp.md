# `dataAzurermAdvisorRecommendations` Submodule <a name="`dataAzurermAdvisorRecommendations` Submodule" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAdvisorRecommendations <a name="DataAzurermAdvisorRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations azurerm_advisor_recommendations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAdvisorRecommendations(Construct Scope, string Id, DataAzurermAdvisorRecommendationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig">DataAzurermAdvisorRecommendationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig">DataAzurermAdvisorRecommendationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory">ResetFilterByCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups">ResetFilterByResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermAdvisorRecommendationsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

---

##### `ResetFilterByCategory` <a name="ResetFilterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory"></a>

```csharp
private void ResetFilterByCategory()
```

##### `ResetFilterByResourceGroups` <a name="ResetFilterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups"></a>

```csharp
private void ResetFilterByResourceGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermAdvisorRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAdvisorRecommendations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAdvisorRecommendations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAdvisorRecommendations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAdvisorRecommendations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermAdvisorRecommendations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermAdvisorRecommendations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermAdvisorRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAdvisorRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations">Recommendations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput">FilterByCategoryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput">FilterByResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory">FilterByCategory</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups">FilterByResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Recommendations`<sup>Required</sup> <a name="Recommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations"></a>

```csharp
public DataAzurermAdvisorRecommendationsRecommendationsList Recommendations { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts"></a>

```csharp
public DataAzurermAdvisorRecommendationsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a>

---

##### `FilterByCategoryInput`<sup>Optional</sup> <a name="FilterByCategoryInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput"></a>

```csharp
public string[] FilterByCategoryInput { get; }
```

- *Type:* string[]

---

##### `FilterByResourceGroupsInput`<sup>Optional</sup> <a name="FilterByResourceGroupsInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput"></a>

```csharp
public string[] FilterByResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FilterByCategory`<sup>Required</sup> <a name="FilterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory"></a>

```csharp
public string[] FilterByCategory { get; }
```

- *Type:* string[]

---

##### `FilterByResourceGroups`<sup>Required</sup> <a name="FilterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups"></a>

```csharp
public string[] FilterByResourceGroups { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAdvisorRecommendationsConfig <a name="DataAzurermAdvisorRecommendationsConfig" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAdvisorRecommendationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] FilterByCategory = null,
    string[] FilterByResourceGroups = null,
    string Id = null,
    DataAzurermAdvisorRecommendationsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory">FilterByCategory</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups">FilterByResourceGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FilterByCategory`<sup>Optional</sup> <a name="FilterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory"></a>

```csharp
public string[] FilterByCategory { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}.

---

##### `FilterByResourceGroups`<sup>Optional</sup> <a name="FilterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups"></a>

```csharp
public string[] FilterByResourceGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts"></a>

```csharp
public DataAzurermAdvisorRecommendationsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#timeouts DataAzurermAdvisorRecommendations#timeouts}

---

### DataAzurermAdvisorRecommendationsRecommendations <a name="DataAzurermAdvisorRecommendationsRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAdvisorRecommendationsRecommendations {

};
```


### DataAzurermAdvisorRecommendationsTimeouts <a name="DataAzurermAdvisorRecommendationsTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAdvisorRecommendationsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAdvisorRecommendationsRecommendationsList <a name="DataAzurermAdvisorRecommendationsRecommendationsList" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAdvisorRecommendationsRecommendationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get"></a>

```csharp
private DataAzurermAdvisorRecommendationsRecommendationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermAdvisorRecommendationsRecommendationsOutputReference <a name="DataAzurermAdvisorRecommendationsRecommendationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAdvisorRecommendationsRecommendationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact">Impact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName">RecommendationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId">RecommendationTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames">SuppressionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime">UpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact"></a>

```csharp
public string Impact { get; }
```

- *Type:* string

---

##### `RecommendationName`<sup>Required</sup> <a name="RecommendationName" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName"></a>

```csharp
public string RecommendationName { get; }
```

- *Type:* string

---

##### `RecommendationTypeId`<sup>Required</sup> <a name="RecommendationTypeId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId"></a>

```csharp
public string RecommendationTypeId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SuppressionNames`<sup>Required</sup> <a name="SuppressionNames" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames"></a>

```csharp
public string[] SuppressionNames { get; }
```

- *Type:* string[]

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime"></a>

```csharp
public string UpdatedTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermAdvisorRecommendationsRecommendations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a>

---


### DataAzurermAdvisorRecommendationsTimeoutsOutputReference <a name="DataAzurermAdvisorRecommendationsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAdvisorRecommendationsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



