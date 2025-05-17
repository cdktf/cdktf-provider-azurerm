# `dataAzurermPublicMaintenanceConfigurations` Submodule <a name="`dataAzurermPublicMaintenanceConfigurations` Submodule" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPublicMaintenanceConfigurations <a name="DataAzurermPublicMaintenanceConfigurations" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations azurerm_public_maintenance_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPublicMaintenanceConfigurations(Construct Scope, string Id, DataAzurermPublicMaintenanceConfigurationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig">DataAzurermPublicMaintenanceConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig">DataAzurermPublicMaintenanceConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetRecurEvery">ResetRecurEvery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermPublicMaintenanceConfigurationsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetRecurEvery` <a name="ResetRecurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetRecurEvery"></a>

```csharp
private void ResetRecurEvery()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPublicMaintenanceConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPublicMaintenanceConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPublicMaintenanceConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPublicMaintenanceConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPublicMaintenanceConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermPublicMaintenanceConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPublicMaintenanceConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPublicMaintenanceConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPublicMaintenanceConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.configs">Configs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList">DataAzurermPublicMaintenanceConfigurationsConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference">DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEveryInput">RecurEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEvery">RecurEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.configs"></a>

```csharp
public DataAzurermPublicMaintenanceConfigurationsConfigsList Configs { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList">DataAzurermPublicMaintenanceConfigurationsConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeouts"></a>

```csharp
public DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference">DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `RecurEveryInput`<sup>Optional</sup> <a name="RecurEveryInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEveryInput"></a>

```csharp
public string RecurEveryInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `RecurEvery`<sup>Required</sup> <a name="RecurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEvery"></a>

```csharp
public string RecurEvery { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPublicMaintenanceConfigurationsConfig <a name="DataAzurermPublicMaintenanceConfigurationsConfig" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPublicMaintenanceConfigurationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Location = null,
    string RecurEvery = null,
    string Scope = null,
    DataAzurermPublicMaintenanceConfigurationsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.recurEvery">RecurEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}.

---

##### `RecurEvery`<sup>Optional</sup> <a name="RecurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.recurEvery"></a>

```csharp
public string RecurEvery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.timeouts"></a>

```csharp
public DataAzurermPublicMaintenanceConfigurationsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#timeouts DataAzurermPublicMaintenanceConfigurations#timeouts}

---

### DataAzurermPublicMaintenanceConfigurationsConfigs <a name="DataAzurermPublicMaintenanceConfigurationsConfigs" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPublicMaintenanceConfigurationsConfigs {

};
```


### DataAzurermPublicMaintenanceConfigurationsTimeouts <a name="DataAzurermPublicMaintenanceConfigurationsTimeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPublicMaintenanceConfigurationsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#read DataAzurermPublicMaintenanceConfigurations#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/public_maintenance_configurations#read DataAzurermPublicMaintenanceConfigurations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPublicMaintenanceConfigurationsConfigsList <a name="DataAzurermPublicMaintenanceConfigurationsConfigsList" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPublicMaintenanceConfigurationsConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get"></a>

```csharp
private DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference <a name="DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.maintenanceScope">MaintenanceScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.recurEvery">RecurEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs">DataAzurermPublicMaintenanceConfigurationsConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaintenanceScope`<sup>Required</sup> <a name="MaintenanceScope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.maintenanceScope"></a>

```csharp
public string MaintenanceScope { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecurEvery`<sup>Required</sup> <a name="RecurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.recurEvery"></a>

```csharp
public string RecurEvery { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermPublicMaintenanceConfigurationsConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs">DataAzurermPublicMaintenanceConfigurationsConfigs</a>

---


### DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference <a name="DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



