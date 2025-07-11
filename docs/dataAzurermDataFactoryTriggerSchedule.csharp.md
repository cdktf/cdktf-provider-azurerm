# `dataAzurermDataFactoryTriggerSchedule` Submodule <a name="`dataAzurermDataFactoryTriggerSchedule` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataFactoryTriggerSchedule <a name="DataAzurermDataFactoryTriggerSchedule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule azurerm_data_factory_trigger_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerSchedule(Construct Scope, string Id, DataAzurermDataFactoryTriggerScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig">DataAzurermDataFactoryTriggerScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig">DataAzurermDataFactoryTriggerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermDataFactoryTriggerScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts">DataAzurermDataFactoryTriggerScheduleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataFactoryTriggerSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataFactoryTriggerSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataFactoryTriggerSchedule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataFactoryTriggerSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDataFactoryTriggerSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDataFactoryTriggerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDataFactoryTriggerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.activated">Activated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.pipelineName">PipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList">DataAzurermDataFactoryTriggerScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference">DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Activated`<sup>Required</sup> <a name="Activated" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.activated"></a>

```csharp
public IResolvable Activated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.pipelineName"></a>

```csharp
public string PipelineName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.schedule"></a>

```csharp
public DataAzurermDataFactoryTriggerScheduleScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList">DataAzurermDataFactoryTriggerScheduleScheduleList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeouts"></a>

```csharp
public DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference">DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataFactoryTriggerScheduleConfig <a name="DataAzurermDataFactoryTriggerScheduleConfig" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string Name,
    string Id = null,
    DataAzurermDataFactoryTriggerScheduleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#data_factory_id DataAzurermDataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#name DataAzurermDataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#id DataAzurermDataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts">DataAzurermDataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#data_factory_id DataAzurermDataFactoryTriggerSchedule#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#name DataAzurermDataFactoryTriggerSchedule#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#id DataAzurermDataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.timeouts"></a>

```csharp
public DataAzurermDataFactoryTriggerScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts">DataAzurermDataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#timeouts DataAzurermDataFactoryTriggerSchedule#timeouts}

---

### DataAzurermDataFactoryTriggerScheduleSchedule <a name="DataAzurermDataFactoryTriggerScheduleSchedule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleSchedule {

};
```


### DataAzurermDataFactoryTriggerScheduleScheduleMonthly <a name="DataAzurermDataFactoryTriggerScheduleScheduleMonthly" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleScheduleMonthly {

};
```


### DataAzurermDataFactoryTriggerScheduleTimeouts <a name="DataAzurermDataFactoryTriggerScheduleTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#read DataAzurermDataFactoryTriggerSchedule#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/data_factory_trigger_schedule#read DataAzurermDataFactoryTriggerSchedule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataFactoryTriggerScheduleScheduleList <a name="DataAzurermDataFactoryTriggerScheduleScheduleList" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.get"></a>

```csharp
private DataAzurermDataFactoryTriggerScheduleScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList <a name="DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.get"></a>

```csharp
private DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference <a name="DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week">Week</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday">Weekday</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly">DataAzurermDataFactoryTriggerScheduleScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Week`<sup>Required</sup> <a name="Week" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week"></a>

```csharp
public double Week { get; }
```

- *Type:* double

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday"></a>

```csharp
public string Weekday { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue"></a>

```csharp
public DataAzurermDataFactoryTriggerScheduleScheduleMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly">DataAzurermDataFactoryTriggerScheduleScheduleMonthly</a>

---


### DataAzurermDataFactoryTriggerScheduleScheduleOutputReference <a name="DataAzurermDataFactoryTriggerScheduleScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.hours">Hours</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.minutes">Minutes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList">DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule">DataAzurermDataFactoryTriggerScheduleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; }
```

- *Type:* double[]

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.hours"></a>

```csharp
public double[] Hours { get; }
```

- *Type:* double[]

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.minutes"></a>

```csharp
public double[] Minutes { get; }
```

- *Type:* double[]

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.monthly"></a>

```csharp
public DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList Monthly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList">DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermDataFactoryTriggerScheduleSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule">DataAzurermDataFactoryTriggerScheduleSchedule</a>

---


### DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference <a name="DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



