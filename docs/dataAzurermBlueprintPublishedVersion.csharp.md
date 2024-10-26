# `dataAzurermBlueprintPublishedVersion` Submodule <a name="`dataAzurermBlueprintPublishedVersion` Submodule" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBlueprintPublishedVersion <a name="DataAzurermBlueprintPublishedVersion" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version azurerm_blueprint_published_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBlueprintPublishedVersion(Construct Scope, string Id, DataAzurermBlueprintPublishedVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig">DataAzurermBlueprintPublishedVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig">DataAzurermBlueprintPublishedVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermBlueprintPublishedVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermBlueprintPublishedVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBlueprintPublishedVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBlueprintPublishedVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBlueprintPublishedVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBlueprintPublishedVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermBlueprintPublishedVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermBlueprintPublishedVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermBlueprintPublishedVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermBlueprintPublishedVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.targetScope">TargetScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference">DataAzurermBlueprintPublishedVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintNameInput">BlueprintNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintName">BlueprintName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `TargetScope`<sup>Required</sup> <a name="TargetScope" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.targetScope"></a>

```csharp
public string TargetScope { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeouts"></a>

```csharp
public DataAzurermBlueprintPublishedVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference">DataAzurermBlueprintPublishedVersionTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `BlueprintNameInput`<sup>Optional</sup> <a name="BlueprintNameInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintNameInput"></a>

```csharp
public string BlueprintNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `BlueprintName`<sup>Required</sup> <a name="BlueprintName" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintName"></a>

```csharp
public string BlueprintName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBlueprintPublishedVersionConfig <a name="DataAzurermBlueprintPublishedVersionConfig" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBlueprintPublishedVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BlueprintName,
    string ScopeId,
    string Version,
    string Id = null,
    DataAzurermBlueprintPublishedVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.blueprintName">BlueprintName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BlueprintName`<sup>Required</sup> <a name="BlueprintName" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.blueprintName"></a>

```csharp
public string BlueprintName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}.

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.timeouts"></a>

```csharp
public DataAzurermBlueprintPublishedVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#timeouts DataAzurermBlueprintPublishedVersion#timeouts}

---

### DataAzurermBlueprintPublishedVersionTimeouts <a name="DataAzurermBlueprintPublishedVersionTimeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBlueprintPublishedVersionTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/data-sources/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBlueprintPublishedVersionTimeoutsOutputReference <a name="DataAzurermBlueprintPublishedVersionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBlueprintPublishedVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



