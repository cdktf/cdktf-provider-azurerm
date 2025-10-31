# `dataAzurermOracleResourceAnchor` Submodule <a name="`dataAzurermOracleResourceAnchor` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleResourceAnchor <a name="DataAzurermOracleResourceAnchor" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor azurerm_oracle_resource_anchor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleResourceAnchor(Construct Scope, string Id, DataAzurermOracleResourceAnchorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig">DataAzurermOracleResourceAnchorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig">DataAzurermOracleResourceAnchorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleResourceAnchorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleResourceAnchor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleResourceAnchor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleResourceAnchor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleResourceAnchor.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleResourceAnchor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermOracleResourceAnchor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleResourceAnchor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleResourceAnchor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleResourceAnchor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.linkedCompartmentId">LinkedCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference">DataAzurermOracleResourceAnchorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `LinkedCompartmentId`<sup>Required</sup> <a name="LinkedCompartmentId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.linkedCompartmentId"></a>

```csharp
public string LinkedCompartmentId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeouts"></a>

```csharp
public DataAzurermOracleResourceAnchorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference">DataAzurermOracleResourceAnchorTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermOracleResourceAnchorTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleResourceAnchorConfig <a name="DataAzurermOracleResourceAnchorConfig" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleResourceAnchorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermOracleResourceAnchorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#name DataAzurermOracleResourceAnchor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#resource_group_name DataAzurermOracleResourceAnchor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#id DataAzurermOracleResourceAnchor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#name DataAzurermOracleResourceAnchor#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#resource_group_name DataAzurermOracleResourceAnchor#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#id DataAzurermOracleResourceAnchor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleResourceAnchorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#timeouts DataAzurermOracleResourceAnchor#timeouts}

---

### DataAzurermOracleResourceAnchorTimeouts <a name="DataAzurermOracleResourceAnchorTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleResourceAnchorTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#read DataAzurermOracleResourceAnchor#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#read DataAzurermOracleResourceAnchor#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleResourceAnchorTimeoutsOutputReference <a name="DataAzurermOracleResourceAnchorTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleResourceAnchorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermOracleResourceAnchorTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a>

---



