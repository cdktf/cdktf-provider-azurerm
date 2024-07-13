# `dataAzurermLinuxFunctionApp` Submodule <a name="`dataAzurermLinuxFunctionApp` Submodule" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLinuxFunctionApp <a name="DataAzurermLinuxFunctionApp" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app azurerm_linux_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionApp(Construct Scope, string Id, DataAzurermLinuxFunctionAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig">DataAzurermLinuxFunctionAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig">DataAzurermLinuxFunctionAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermLinuxFunctionAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeouts">DataAzurermLinuxFunctionAppTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermLinuxFunctionApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermLinuxFunctionApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermLinuxFunctionApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermLinuxFunctionApp.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermLinuxFunctionApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermLinuxFunctionApp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermLinuxFunctionApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermLinuxFunctionApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLinuxFunctionApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.appSettings">AppSettings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList">DataAzurermLinuxFunctionAppAuthSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.authSettingsV2">AuthSettingsV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List">DataAzurermLinuxFunctionAppAuthSettingsV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList">DataAzurermLinuxFunctionAppBackupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.builtinLoggingEnabled">BuiltinLoggingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.clientCertificateExclusionPaths">ClientCertificateExclusionPaths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList">DataAzurermLinuxFunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.contentShareForceDisabled">ContentShareForceDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.customDomainVerificationId">CustomDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.defaultHostname">DefaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.ftpPublishBasicAuthenticationEnabled">FtpPublishBasicAuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.functionsExtensionVersion">FunctionsExtensionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.hostingEnvironmentId">HostingEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.httpsOnly">HttpsOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList">DataAzurermLinuxFunctionAppIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.outboundIpAddressList">OutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.possibleOutboundIpAddressList">PossibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.servicePlanId">ServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList">DataAzurermLinuxFunctionAppSiteConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList">DataAzurermLinuxFunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.stickySettings">StickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList">DataAzurermLinuxFunctionAppStickySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageKeyVaultSecretId">StorageKeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageUsesManagedIdentity">StorageUsesManagedIdentity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference">DataAzurermLinuxFunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.usage">Usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.webdeployPublishBasicAuthenticationEnabled">WebdeployPublishBasicAuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.appSettings"></a>

```csharp
public StringMap AppSettings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AuthSettings`<sup>Required</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.authSettings"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsList AuthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList">DataAzurermLinuxFunctionAppAuthSettingsList</a>

---

##### `AuthSettingsV2`<sup>Required</sup> <a name="AuthSettingsV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.authSettingsV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2List AuthSettingsV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List">DataAzurermLinuxFunctionAppAuthSettingsV2List</a>

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.backup"></a>

```csharp
public DataAzurermLinuxFunctionAppBackupList Backup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList">DataAzurermLinuxFunctionAppBackupList</a>

---

##### `BuiltinLoggingEnabled`<sup>Required</sup> <a name="BuiltinLoggingEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.builtinLoggingEnabled"></a>

```csharp
public IResolvable BuiltinLoggingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClientCertificateEnabled`<sup>Required</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.clientCertificateEnabled"></a>

```csharp
public IResolvable ClientCertificateEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClientCertificateExclusionPaths`<sup>Required</sup> <a name="ClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.clientCertificateExclusionPaths"></a>

```csharp
public string ClientCertificateExclusionPaths { get; }
```

- *Type:* string

---

##### `ClientCertificateMode`<sup>Required</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.clientCertificateMode"></a>

```csharp
public string ClientCertificateMode { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.connectionString"></a>

```csharp
public DataAzurermLinuxFunctionAppConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList">DataAzurermLinuxFunctionAppConnectionStringList</a>

---

##### `ContentShareForceDisabled`<sup>Required</sup> <a name="ContentShareForceDisabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.contentShareForceDisabled"></a>

```csharp
public IResolvable ContentShareForceDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomDomainVerificationId`<sup>Required</sup> <a name="CustomDomainVerificationId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.customDomainVerificationId"></a>

```csharp
public string CustomDomainVerificationId { get; }
```

- *Type:* string

---

##### `DailyMemoryTimeQuota`<sup>Required</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.dailyMemoryTimeQuota"></a>

```csharp
public double DailyMemoryTimeQuota { get; }
```

- *Type:* double

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.defaultHostname"></a>

```csharp
public string DefaultHostname { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FtpPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="FtpPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.ftpPublishBasicAuthenticationEnabled"></a>

```csharp
public IResolvable FtpPublishBasicAuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FunctionsExtensionVersion`<sup>Required</sup> <a name="FunctionsExtensionVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.functionsExtensionVersion"></a>

```csharp
public string FunctionsExtensionVersion { get; }
```

- *Type:* string

---

##### `HostingEnvironmentId`<sup>Required</sup> <a name="HostingEnvironmentId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.hostingEnvironmentId"></a>

```csharp
public string HostingEnvironmentId { get; }
```

- *Type:* string

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.httpsOnly"></a>

```csharp
public IResolvable HttpsOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.identity"></a>

```csharp
public DataAzurermLinuxFunctionAppIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList">DataAzurermLinuxFunctionAppIdentityList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.outboundIpAddresses"></a>

```csharp
public string OutboundIpAddresses { get; }
```

- *Type:* string

---

##### `OutboundIpAddressList`<sup>Required</sup> <a name="OutboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.outboundIpAddressList"></a>

```csharp
public string[] OutboundIpAddressList { get; }
```

- *Type:* string[]

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.possibleOutboundIpAddresses"></a>

```csharp
public string PossibleOutboundIpAddresses { get; }
```

- *Type:* string

---

##### `PossibleOutboundIpAddressList`<sup>Required</sup> <a name="PossibleOutboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.possibleOutboundIpAddressList"></a>

```csharp
public string[] PossibleOutboundIpAddressList { get; }
```

- *Type:* string[]

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.publicNetworkAccessEnabled"></a>

```csharp
public IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServicePlanId`<sup>Required</sup> <a name="ServicePlanId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.servicePlanId"></a>

```csharp
public string ServicePlanId { get; }
```

- *Type:* string

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.siteConfig"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigList SiteConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList">DataAzurermLinuxFunctionAppSiteConfigList</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.siteCredential"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteCredentialList SiteCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList">DataAzurermLinuxFunctionAppSiteCredentialList</a>

---

##### `StickySettings`<sup>Required</sup> <a name="StickySettings" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.stickySettings"></a>

```csharp
public DataAzurermLinuxFunctionAppStickySettingsList StickySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList">DataAzurermLinuxFunctionAppStickySettingsList</a>

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `StorageKeyVaultSecretId`<sup>Required</sup> <a name="StorageKeyVaultSecretId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageKeyVaultSecretId"></a>

```csharp
public string StorageKeyVaultSecretId { get; }
```

- *Type:* string

---

##### `StorageUsesManagedIdentity`<sup>Required</sup> <a name="StorageUsesManagedIdentity" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.storageUsesManagedIdentity"></a>

```csharp
public IResolvable StorageUsesManagedIdentity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.timeouts"></a>

```csharp
public DataAzurermLinuxFunctionAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference">DataAzurermLinuxFunctionAppTimeoutsOutputReference</a>

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `WebdeployPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="WebdeployPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.webdeployPublishBasicAuthenticationEnabled"></a>

```csharp
public IResolvable WebdeployPublishBasicAuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLinuxFunctionAppAuthSettings <a name="DataAzurermLinuxFunctionAppAuthSettings" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettings {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory <a name="DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsFacebook <a name="DataAzurermLinuxFunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsFacebook {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsGithub <a name="DataAzurermLinuxFunctionAppAuthSettingsGithub" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsGithub {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsGoogle <a name="DataAzurermLinuxFunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsGoogle {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsMicrosoft <a name="DataAzurermLinuxFunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoft.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsMicrosoft {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsTwitter <a name="DataAzurermLinuxFunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsTwitter {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2Login <a name="DataAzurermLinuxFunctionAppAuthSettingsV2Login" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2Login"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2Login.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2Login {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2 {

};
```


### DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2 <a name="DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2 {

};
```


### DataAzurermLinuxFunctionAppBackup <a name="DataAzurermLinuxFunctionAppBackup" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppBackup {

};
```


### DataAzurermLinuxFunctionAppBackupSchedule <a name="DataAzurermLinuxFunctionAppBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppBackupSchedule {

};
```


### DataAzurermLinuxFunctionAppConfig <a name="DataAzurermLinuxFunctionAppConfig" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermLinuxFunctionAppTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#name DataAzurermLinuxFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#resource_group_name DataAzurermLinuxFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#id DataAzurermLinuxFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeouts">DataAzurermLinuxFunctionAppTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#name DataAzurermLinuxFunctionApp#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#resource_group_name DataAzurermLinuxFunctionApp#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#id DataAzurermLinuxFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConfig.property.timeouts"></a>

```csharp
public DataAzurermLinuxFunctionAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeouts">DataAzurermLinuxFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#timeouts DataAzurermLinuxFunctionApp#timeouts}

---

### DataAzurermLinuxFunctionAppConnectionString <a name="DataAzurermLinuxFunctionAppConnectionString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppConnectionString {

};
```


### DataAzurermLinuxFunctionAppIdentity <a name="DataAzurermLinuxFunctionAppIdentity" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppIdentity {

};
```


### DataAzurermLinuxFunctionAppSiteConfig <a name="DataAzurermLinuxFunctionAppSiteConfig" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfig {

};
```


### DataAzurermLinuxFunctionAppSiteConfigApplicationStack <a name="DataAzurermLinuxFunctionAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigApplicationStack {

};
```


### DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker <a name="DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker {

};
```


### DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs <a name="DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs {

};
```


### DataAzurermLinuxFunctionAppSiteConfigCors <a name="DataAzurermLinuxFunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigCors {

};
```


### DataAzurermLinuxFunctionAppSiteConfigIpRestriction <a name="DataAzurermLinuxFunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigIpRestriction {

};
```


### DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders <a name="DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders {

};
```


### DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction <a name="DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction {

};
```


### DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders <a name="DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders {

};
```


### DataAzurermLinuxFunctionAppSiteCredential <a name="DataAzurermLinuxFunctionAppSiteCredential" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteCredential {

};
```


### DataAzurermLinuxFunctionAppStickySettings <a name="DataAzurermLinuxFunctionAppStickySettings" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppStickySettings {

};
```


### DataAzurermLinuxFunctionAppTimeouts <a name="DataAzurermLinuxFunctionAppTimeouts" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#read DataAzurermLinuxFunctionApp#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/linux_function_app#read DataAzurermLinuxFunctionApp#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList <a name="DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory">DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory">DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsFacebookList <a name="DataAzurermLinuxFunctionAppAuthSettingsFacebookList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsFacebookList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecret">AppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">AppSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebook">DataAzurermLinuxFunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```csharp
public string AppSecret { get; }
```

- *Type:* string

---

##### `AppSecretSettingName`<sup>Required</sup> <a name="AppSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```csharp
public string AppSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsFacebook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebook">DataAzurermLinuxFunctionAppAuthSettingsFacebook</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsGithubList <a name="DataAzurermLinuxFunctionAppAuthSettingsGithubList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithub">DataAzurermLinuxFunctionAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsGithub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithub">DataAzurermLinuxFunctionAppAuthSettingsGithub</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsGoogleList <a name="DataAzurermLinuxFunctionAppAuthSettingsGoogleList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsGoogleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogle">DataAzurermLinuxFunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsGoogle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogle">DataAzurermLinuxFunctionAppAuthSettingsGoogle</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsList <a name="DataAzurermLinuxFunctionAppAuthSettingsList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList <a name="DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoft">DataAzurermLinuxFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsMicrosoft InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoft">DataAzurermLinuxFunctionAppAuthSettingsMicrosoft</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList">DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters">AdditionalLoginParameters</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList">DataAzurermLinuxFunctionAppAuthSettingsFacebookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList">DataAzurermLinuxFunctionAppAuthSettingsGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList">DataAzurermLinuxFunctionAppAuthSettingsGoogleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList">DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList">DataAzurermLinuxFunctionAppAuthSettingsTwitterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettings">DataAzurermLinuxFunctionAppAuthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList">DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList</a>

---

##### `AdditionalLoginParameters`<sup>Required</sup> <a name="AdditionalLoginParameters" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```csharp
public StringMap AdditionalLoginParameters { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; }
```

- *Type:* string[]

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Facebook`<sup>Required</sup> <a name="Facebook" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.facebook"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsFacebookList Facebook { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsFacebookList">DataAzurermLinuxFunctionAppAuthSettingsFacebookList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.github"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGithubList">DataAzurermLinuxFunctionAppAuthSettingsGithubList</a>

---

##### `Google`<sup>Required</sup> <a name="Google" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.google"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsGoogleList Google { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsGoogleList">DataAzurermLinuxFunctionAppAuthSettingsGoogleList</a>

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Microsoft`<sup>Required</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList Microsoft { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList">DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList</a>

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `TokenRefreshExtensionHours`<sup>Required</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```csharp
public double TokenRefreshExtensionHours { get; }
```

- *Type:* double

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```csharp
public IResolvable TokenStoreEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.twitter"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsTwitterList Twitter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList">DataAzurermLinuxFunctionAppAuthSettingsTwitterList</a>

---

##### `UnauthenticatedClientAction`<sup>Required</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```csharp
public string UnauthenticatedClientAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettings">DataAzurermLinuxFunctionAppAuthSettings</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsTwitterList <a name="DataAzurermLinuxFunctionAppAuthSettingsTwitterList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsTwitterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">ConsumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitter">DataAzurermLinuxFunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `ConsumerSecretSettingName`<sup>Required</sup> <a name="ConsumerSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```csharp
public string ConsumerSecretSettingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsTwitter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsTwitter">DataAzurermLinuxFunctionAppAuthSettingsTwitter</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedApplications">AllowedApplications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedGroups">AllowedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedIdentities">AllowedIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretCertificateThumbprint">ClientSecretCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedClientApplications">JwtAllowedClientApplications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedGroups">JwtAllowedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.loginParameters">LoginParameters</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.tenantAuthEndpoint">TenantAuthEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.wwwAuthenticationDisabled">WwwAuthenticationDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2">DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedApplications"></a>

```csharp
public string[] AllowedApplications { get; }
```

- *Type:* string[]

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `AllowedGroups`<sup>Required</sup> <a name="AllowedGroups" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedGroups"></a>

```csharp
public string[] AllowedGroups { get; }
```

- *Type:* string[]

---

##### `AllowedIdentities`<sup>Required</sup> <a name="AllowedIdentities" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedIdentities"></a>

```csharp
public string[] AllowedIdentities { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretCertificateThumbprint`<sup>Required</sup> <a name="ClientSecretCertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretCertificateThumbprint"></a>

```csharp
public string ClientSecretCertificateThumbprint { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `JwtAllowedClientApplications`<sup>Required</sup> <a name="JwtAllowedClientApplications" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedClientApplications"></a>

```csharp
public string[] JwtAllowedClientApplications { get; }
```

- *Type:* string[]

---

##### `JwtAllowedGroups`<sup>Required</sup> <a name="JwtAllowedGroups" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedGroups"></a>

```csharp
public string[] JwtAllowedGroups { get; }
```

- *Type:* string[]

---

##### `LoginParameters`<sup>Required</sup> <a name="LoginParameters" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.loginParameters"></a>

```csharp
public StringMap LoginParameters { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TenantAuthEndpoint`<sup>Required</sup> <a name="TenantAuthEndpoint" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.tenantAuthEndpoint"></a>

```csharp
public string TenantAuthEndpoint { get; }
```

- *Type:* string

---

##### `WwwAuthenticationDisabled`<sup>Required</sup> <a name="WwwAuthenticationDisabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.wwwAuthenticationDisabled"></a>

```csharp
public IResolvable WwwAuthenticationDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2">DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2">DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2">DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2">DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2">DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.authorisationEndpoint">AuthorisationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.certificationUri">CertificationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientCredentialMethod">ClientCredentialMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.issuerEndpoint">IssuerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.nameClaimType">NameClaimType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.openidConfigurationEndpoint">OpenidConfigurationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2">DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorisationEndpoint`<sup>Required</sup> <a name="AuthorisationEndpoint" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.authorisationEndpoint"></a>

```csharp
public string AuthorisationEndpoint { get; }
```

- *Type:* string

---

##### `CertificationUri`<sup>Required</sup> <a name="CertificationUri" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.certificationUri"></a>

```csharp
public string CertificationUri { get; }
```

- *Type:* string

---

##### `ClientCredentialMethod`<sup>Required</sup> <a name="ClientCredentialMethod" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientCredentialMethod"></a>

```csharp
public string ClientCredentialMethod { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `IssuerEndpoint`<sup>Required</sup> <a name="IssuerEndpoint" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.issuerEndpoint"></a>

```csharp
public string IssuerEndpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameClaimType`<sup>Required</sup> <a name="NameClaimType" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.nameClaimType"></a>

```csharp
public string NameClaimType { get; }
```

- *Type:* string

---

##### `OpenidConfigurationEndpoint`<sup>Required</sup> <a name="OpenidConfigurationEndpoint" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.openidConfigurationEndpoint"></a>

```csharp
public string OpenidConfigurationEndpoint { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2">DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appSecretSettingName">AppSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.graphApiVersion">GraphApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2">DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppSecretSettingName`<sup>Required</sup> <a name="AppSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appSecretSettingName"></a>

```csharp
public string AppSecretSettingName { get; }
```

- *Type:* string

---

##### `GraphApiVersion`<sup>Required</sup> <a name="GraphApiVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.graphApiVersion"></a>

```csharp
public string GraphApiVersion { get; }
```

- *Type:* string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2">DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2">DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2">DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2">DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2">DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2LoginList <a name="DataAzurermLinuxFunctionAppAuthSettingsV2LoginList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2LoginList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationConvention">CookieExpirationConvention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationTime">CookieExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.logoutEndpoint">LogoutEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.nonceExpirationTime">NonceExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.preserveUrlFragmentsForLogins">PreserveUrlFragmentsForLogins</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenRefreshExtensionTime">TokenRefreshExtensionTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStorePath">TokenStorePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreSasSettingName">TokenStoreSasSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.validateNonce">ValidateNonce</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2Login">DataAzurermLinuxFunctionAppAuthSettingsV2Login</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; }
```

- *Type:* string[]

---

##### `CookieExpirationConvention`<sup>Required</sup> <a name="CookieExpirationConvention" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationConvention"></a>

```csharp
public string CookieExpirationConvention { get; }
```

- *Type:* string

---

##### `CookieExpirationTime`<sup>Required</sup> <a name="CookieExpirationTime" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationTime"></a>

```csharp
public string CookieExpirationTime { get; }
```

- *Type:* string

---

##### `LogoutEndpoint`<sup>Required</sup> <a name="LogoutEndpoint" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.logoutEndpoint"></a>

```csharp
public string LogoutEndpoint { get; }
```

- *Type:* string

---

##### `NonceExpirationTime`<sup>Required</sup> <a name="NonceExpirationTime" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.nonceExpirationTime"></a>

```csharp
public string NonceExpirationTime { get; }
```

- *Type:* string

---

##### `PreserveUrlFragmentsForLogins`<sup>Required</sup> <a name="PreserveUrlFragmentsForLogins" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.preserveUrlFragmentsForLogins"></a>

```csharp
public IResolvable PreserveUrlFragmentsForLogins { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TokenRefreshExtensionTime`<sup>Required</sup> <a name="TokenRefreshExtensionTime" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenRefreshExtensionTime"></a>

```csharp
public double TokenRefreshExtensionTime { get; }
```

- *Type:* double

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreEnabled"></a>

```csharp
public IResolvable TokenStoreEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TokenStorePath`<sup>Required</sup> <a name="TokenStorePath" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStorePath"></a>

```csharp
public string TokenStorePath { get; }
```

- *Type:* string

---

##### `TokenStoreSasSettingName`<sup>Required</sup> <a name="TokenStoreSasSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreSasSettingName"></a>

```csharp
public string TokenStoreSasSettingName { get; }
```

- *Type:* string

---

##### `ValidateNonce`<sup>Required</sup> <a name="ValidateNonce" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.validateNonce"></a>

```csharp
public IResolvable ValidateNonce { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2Login InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2Login">DataAzurermLinuxFunctionAppAuthSettingsV2Login</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2">DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientSecretSettingName"></a>

```csharp
public string ClientSecretSettingName { get; }
```

- *Type:* string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2">DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.activeDirectoryV2">ActiveDirectoryV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List">DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.appleV2">AppleV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List">DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.authEnabled">AuthEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.azureStaticWebAppV2">AzureStaticWebAppV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List">DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.configFilePath">ConfigFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.customOidcV2">CustomOidcV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List">DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.excludedPaths">ExcludedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.facebookV2">FacebookV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List">DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.forwardProxyConvention">ForwardProxyConvention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomHostHeaderName">ForwardProxyCustomHostHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomSchemeHeaderName">ForwardProxyCustomSchemeHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.githubV2">GithubV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List">DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.googleV2">GoogleV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List">DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.httpRouteApiPrefix">HttpRouteApiPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.login">Login</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList">DataAzurermLinuxFunctionAppAuthSettingsV2LoginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.microsoftV2">MicrosoftV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List">DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.requireAuthentication">RequireAuthentication</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.requireHttps">RequireHttps</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.twitterV2">TwitterV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List">DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.unauthenticatedAction">UnauthenticatedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2">DataAzurermLinuxFunctionAppAuthSettingsV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryV2`<sup>Required</sup> <a name="ActiveDirectoryV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.activeDirectoryV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List ActiveDirectoryV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List">DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List</a>

---

##### `AppleV2`<sup>Required</sup> <a name="AppleV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.appleV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List AppleV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List">DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List</a>

---

##### `AuthEnabled`<sup>Required</sup> <a name="AuthEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.authEnabled"></a>

```csharp
public IResolvable AuthEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AzureStaticWebAppV2`<sup>Required</sup> <a name="AzureStaticWebAppV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.azureStaticWebAppV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List AzureStaticWebAppV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List">DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List</a>

---

##### `ConfigFilePath`<sup>Required</sup> <a name="ConfigFilePath" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.configFilePath"></a>

```csharp
public string ConfigFilePath { get; }
```

- *Type:* string

---

##### `CustomOidcV2`<sup>Required</sup> <a name="CustomOidcV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.customOidcV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List CustomOidcV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List">DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List</a>

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; }
```

- *Type:* string

---

##### `ExcludedPaths`<sup>Required</sup> <a name="ExcludedPaths" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.excludedPaths"></a>

```csharp
public string[] ExcludedPaths { get; }
```

- *Type:* string[]

---

##### `FacebookV2`<sup>Required</sup> <a name="FacebookV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.facebookV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List FacebookV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List">DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List</a>

---

##### `ForwardProxyConvention`<sup>Required</sup> <a name="ForwardProxyConvention" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.forwardProxyConvention"></a>

```csharp
public string ForwardProxyConvention { get; }
```

- *Type:* string

---

##### `ForwardProxyCustomHostHeaderName`<sup>Required</sup> <a name="ForwardProxyCustomHostHeaderName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomHostHeaderName"></a>

```csharp
public string ForwardProxyCustomHostHeaderName { get; }
```

- *Type:* string

---

##### `ForwardProxyCustomSchemeHeaderName`<sup>Required</sup> <a name="ForwardProxyCustomSchemeHeaderName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomSchemeHeaderName"></a>

```csharp
public string ForwardProxyCustomSchemeHeaderName { get; }
```

- *Type:* string

---

##### `GithubV2`<sup>Required</sup> <a name="GithubV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.githubV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List GithubV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List">DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List</a>

---

##### `GoogleV2`<sup>Required</sup> <a name="GoogleV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.googleV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List GoogleV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List">DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List</a>

---

##### `HttpRouteApiPrefix`<sup>Required</sup> <a name="HttpRouteApiPrefix" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.httpRouteApiPrefix"></a>

```csharp
public string HttpRouteApiPrefix { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.login"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2LoginList Login { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2LoginList">DataAzurermLinuxFunctionAppAuthSettingsV2LoginList</a>

---

##### `MicrosoftV2`<sup>Required</sup> <a name="MicrosoftV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.microsoftV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List MicrosoftV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List">DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List</a>

---

##### `RequireAuthentication`<sup>Required</sup> <a name="RequireAuthentication" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.requireAuthentication"></a>

```csharp
public IResolvable RequireAuthentication { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RequireHttps`<sup>Required</sup> <a name="RequireHttps" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.requireHttps"></a>

```csharp
public IResolvable RequireHttps { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `TwitterV2`<sup>Required</sup> <a name="TwitterV2" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.twitterV2"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List TwitterV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List">DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List</a>

---

##### `UnauthenticatedAction`<sup>Required</sup> <a name="UnauthenticatedAction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.unauthenticatedAction"></a>

```csharp
public string UnauthenticatedAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2">DataAzurermLinuxFunctionAppAuthSettingsV2</a>

---


### DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List <a name="DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.get"></a>

```csharp
private DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference <a name="DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerSecretSettingName">ConsumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2">DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecretSettingName`<sup>Required</sup> <a name="ConsumerSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerSecretSettingName"></a>

```csharp
public string ConsumerSecretSettingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2">DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2</a>

---


### DataAzurermLinuxFunctionAppBackupList <a name="DataAzurermLinuxFunctionAppBackupList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppBackupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppBackupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppBackupOutputReference <a name="DataAzurermLinuxFunctionAppBackupOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList">DataAzurermLinuxFunctionAppBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.storageAccountUrl">StorageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackup">DataAzurermLinuxFunctionAppBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.schedule"></a>

```csharp
public DataAzurermLinuxFunctionAppBackupScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList">DataAzurermLinuxFunctionAppBackupScheduleList</a>

---

##### `StorageAccountUrl`<sup>Required</sup> <a name="StorageAccountUrl" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.storageAccountUrl"></a>

```csharp
public string StorageAccountUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackup">DataAzurermLinuxFunctionAppBackup</a>

---


### DataAzurermLinuxFunctionAppBackupScheduleList <a name="DataAzurermLinuxFunctionAppBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppBackupScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppBackupScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppBackupScheduleOutputReference <a name="DataAzurermLinuxFunctionAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.frequencyUnit">FrequencyUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">KeepAtLeastOneBackup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.lastExecutionTime">LastExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupSchedule">DataAzurermLinuxFunctionAppBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```csharp
public double FrequencyInterval { get; }
```

- *Type:* double

---

##### `FrequencyUnit`<sup>Required</sup> <a name="FrequencyUnit" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```csharp
public string FrequencyUnit { get; }
```

- *Type:* string

---

##### `KeepAtLeastOneBackup`<sup>Required</sup> <a name="KeepAtLeastOneBackup" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```csharp
public IResolvable KeepAtLeastOneBackup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastExecutionTime`<sup>Required</sup> <a name="LastExecutionTime" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```csharp
public string LastExecutionTime { get; }
```

- *Type:* string

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppBackupSchedule">DataAzurermLinuxFunctionAppBackupSchedule</a>

---


### DataAzurermLinuxFunctionAppConnectionStringList <a name="DataAzurermLinuxFunctionAppConnectionStringList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppConnectionStringOutputReference <a name="DataAzurermLinuxFunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionString">DataAzurermLinuxFunctionAppConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionStringOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppConnectionString InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppConnectionString">DataAzurermLinuxFunctionAppConnectionString</a>

---


### DataAzurermLinuxFunctionAppIdentityList <a name="DataAzurermLinuxFunctionAppIdentityList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppIdentityOutputReference <a name="DataAzurermLinuxFunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentity">DataAzurermLinuxFunctionAppIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppIdentity">DataAzurermLinuxFunctionAppIdentity</a>

---


### DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList <a name="DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageTag">ImageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryPassword">RegistryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUrl">RegistryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUsername">RegistryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker">DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImageTag`<sup>Required</sup> <a name="ImageTag" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.imageTag"></a>

```csharp
public string ImageTag { get; }
```

- *Type:* string

---

##### `RegistryPassword`<sup>Required</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryPassword"></a>

```csharp
public string RegistryPassword { get; }
```

- *Type:* string

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUrl"></a>

```csharp
public string RegistryUrl { get; }
```

- *Type:* string

---

##### `RegistryUsername`<sup>Required</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.registryUsername"></a>

```csharp
public string RegistryUsername { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker">DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker</a>

---


### DataAzurermLinuxFunctionAppSiteConfigApplicationStackList <a name="DataAzurermLinuxFunctionAppSiteConfigApplicationStackList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigApplicationStackList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.docker">Docker</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList">DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">DotnetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion">JavaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion">NodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">PowershellCoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime">UseCustomRuntime</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">UseDotnetIsolatedRuntime</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStack">DataAzurermLinuxFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Docker`<sup>Required</sup> <a name="Docker" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.docker"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList Docker { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList">DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList</a>

---

##### `DotnetVersion`<sup>Required</sup> <a name="DotnetVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```csharp
public string DotnetVersion { get; }
```

- *Type:* string

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```csharp
public string JavaVersion { get; }
```

- *Type:* string

---

##### `NodeVersion`<sup>Required</sup> <a name="NodeVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```csharp
public string NodeVersion { get; }
```

- *Type:* string

---

##### `PowershellCoreVersion`<sup>Required</sup> <a name="PowershellCoreVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```csharp
public string PowershellCoreVersion { get; }
```

- *Type:* string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; }
```

- *Type:* string

---

##### `UseCustomRuntime`<sup>Required</sup> <a name="UseCustomRuntime" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```csharp
public IResolvable UseCustomRuntime { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UseDotnetIsolatedRuntime`<sup>Required</sup> <a name="UseDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```csharp
public IResolvable UseDotnetIsolatedRuntime { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigApplicationStack InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStack">DataAzurermLinuxFunctionAppSiteConfigApplicationStack</a>

---


### DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList <a name="DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">DiskQuotaMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs">DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskQuotaMb`<sup>Required</sup> <a name="DiskQuotaMb" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```csharp
public double DiskQuotaMb { get; }
```

- *Type:* double

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs">DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs</a>

---


### DataAzurermLinuxFunctionAppSiteConfigCorsList <a name="DataAzurermLinuxFunctionAppSiteConfigCorsList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigCorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCors">DataAzurermLinuxFunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```csharp
public IResolvable SupportCredentials { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigCors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCors">DataAzurermLinuxFunctionAppSiteConfigCors</a>

---


### DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList <a name="DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders</a>

---


### DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList <a name="DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestriction">DataAzurermLinuxFunctionAppSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigIpRestriction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestriction">DataAzurermLinuxFunctionAppSiteConfigIpRestriction</a>

---


### DataAzurermLinuxFunctionAppSiteConfigList <a name="DataAzurermLinuxFunctionAppSiteConfigList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl">ApiDefinitionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.apiManagementApiId">ApiManagementApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.appCommandLine">AppCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString">ApplicationInsightsConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsKey">ApplicationInsightsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.applicationStack">ApplicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList">DataAzurermLinuxFunctionAppSiteConfigApplicationStackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.appServiceLogs">AppServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList">DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId">ContainerRegistryManagedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentity">ContainerRegistryUseManagedIdentity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList">DataAzurermLinuxFunctionAppSiteConfigCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.defaultDocuments">DefaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">DetailedErrorLoggingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">HealthCheckEvictionTimeInMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList">DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.ipRestrictionDefaultAction">IpRestrictionDefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.loadBalancingMode">LoadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.managedPipelineMode">ManagedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled">RemoteDebuggingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion">RemoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList">DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmIpRestrictionDefaultAction">ScmIpRestrictionDefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion">ScmMinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.use32BitWorker">Use32BitWorker</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.workerCount">WorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfig">DataAzurermLinuxFunctionAppSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```csharp
public IResolvable AlwaysOn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ApiDefinitionUrl`<sup>Required</sup> <a name="ApiDefinitionUrl" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```csharp
public string ApiDefinitionUrl { get; }
```

- *Type:* string

---

##### `ApiManagementApiId`<sup>Required</sup> <a name="ApiManagementApiId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```csharp
public string ApiManagementApiId { get; }
```

- *Type:* string

---

##### `AppCommandLine`<sup>Required</sup> <a name="AppCommandLine" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.appCommandLine"></a>

```csharp
public string AppCommandLine { get; }
```

- *Type:* string

---

##### `ApplicationInsightsConnectionString`<sup>Required</sup> <a name="ApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```csharp
public string ApplicationInsightsConnectionString { get; }
```

- *Type:* string

---

##### `ApplicationInsightsKey`<sup>Required</sup> <a name="ApplicationInsightsKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.applicationInsightsKey"></a>

```csharp
public string ApplicationInsightsKey { get; }
```

- *Type:* string

---

##### `ApplicationStack`<sup>Required</sup> <a name="ApplicationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.applicationStack"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigApplicationStackList ApplicationStack { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigApplicationStackList">DataAzurermLinuxFunctionAppSiteConfigApplicationStackList</a>

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; }
```

- *Type:* double

---

##### `AppServiceLogs`<sup>Required</sup> <a name="AppServiceLogs" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.appServiceLogs"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList AppServiceLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList">DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList</a>

---

##### `ContainerRegistryManagedIdentityClientId`<sup>Required</sup> <a name="ContainerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId"></a>

```csharp
public string ContainerRegistryManagedIdentityClientId { get; }
```

- *Type:* string

---

##### `ContainerRegistryUseManagedIdentity`<sup>Required</sup> <a name="ContainerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentity"></a>

```csharp
public IResolvable ContainerRegistryUseManagedIdentity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.cors"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigCorsList Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigCorsList">DataAzurermLinuxFunctionAppSiteConfigCorsList</a>

---

##### `DefaultDocuments`<sup>Required</sup> <a name="DefaultDocuments" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.defaultDocuments"></a>

```csharp
public string[] DefaultDocuments { get; }
```

- *Type:* string[]

---

##### `DetailedErrorLoggingEnabled`<sup>Required</sup> <a name="DetailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```csharp
public IResolvable DetailedErrorLoggingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; }
```

- *Type:* double

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```csharp
public string FtpsState { get; }
```

- *Type:* string

---

##### `HealthCheckEvictionTimeInMin`<sup>Required</sup> <a name="HealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```csharp
public double HealthCheckEvictionTimeInMin { get; }
```

- *Type:* double

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```csharp
public IResolvable Http2Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList IpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList">DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList</a>

---

##### `IpRestrictionDefaultAction`<sup>Required</sup> <a name="IpRestrictionDefaultAction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.ipRestrictionDefaultAction"></a>

```csharp
public string IpRestrictionDefaultAction { get; }
```

- *Type:* string

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; }
```

- *Type:* string

---

##### `LoadBalancingMode`<sup>Required</sup> <a name="LoadBalancingMode" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```csharp
public string LoadBalancingMode { get; }
```

- *Type:* string

---

##### `ManagedPipelineMode`<sup>Required</sup> <a name="ManagedPipelineMode" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```csharp
public string ManagedPipelineMode { get; }
```

- *Type:* string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; }
```

- *Type:* double

---

##### `RemoteDebuggingEnabled`<sup>Required</sup> <a name="RemoteDebuggingEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```csharp
public IResolvable RemoteDebuggingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RemoteDebuggingVersion`<sup>Required</sup> <a name="RemoteDebuggingVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```csharp
public string RemoteDebuggingVersion { get; }
```

- *Type:* string

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public IResolvable RuntimeScaleMonitoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList ScmIpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList">DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `ScmIpRestrictionDefaultAction`<sup>Required</sup> <a name="ScmIpRestrictionDefaultAction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmIpRestrictionDefaultAction"></a>

```csharp
public string ScmIpRestrictionDefaultAction { get; }
```

- *Type:* string

---

##### `ScmMinimumTlsVersion`<sup>Required</sup> <a name="ScmMinimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```csharp
public string ScmMinimumTlsVersion { get; }
```

- *Type:* string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```csharp
public IResolvable ScmUseMainIpRestriction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Use32BitWorker`<sup>Required</sup> <a name="Use32BitWorker" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.use32BitWorker"></a>

```csharp
public IResolvable Use32BitWorker { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```csharp
public IResolvable VnetRouteAllEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```csharp
public IResolvable WebsocketsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.workerCount"></a>

```csharp
public double WorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfig">DataAzurermLinuxFunctionAppSiteConfig</a>

---


### DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList <a name="DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders</a>

---


### DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList <a name="DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference <a name="DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction">DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction">DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction</a>

---


### DataAzurermLinuxFunctionAppSiteCredentialList <a name="DataAzurermLinuxFunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppSiteCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppSiteCredentialOutputReference <a name="DataAzurermLinuxFunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppSiteCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredential">DataAzurermLinuxFunctionAppSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppSiteCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppSiteCredential">DataAzurermLinuxFunctionAppSiteCredential</a>

---


### DataAzurermLinuxFunctionAppStickySettingsList <a name="DataAzurermLinuxFunctionAppStickySettingsList" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppStickySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.get"></a>

```csharp
private DataAzurermLinuxFunctionAppStickySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermLinuxFunctionAppStickySettingsOutputReference <a name="DataAzurermLinuxFunctionAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppStickySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.appSettingNames">AppSettingNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.connectionStringNames">ConnectionStringNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettings">DataAzurermLinuxFunctionAppStickySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSettingNames`<sup>Required</sup> <a name="AppSettingNames" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.appSettingNames"></a>

```csharp
public string[] AppSettingNames { get; }
```

- *Type:* string[]

---

##### `ConnectionStringNames`<sup>Required</sup> <a name="ConnectionStringNames" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.connectionStringNames"></a>

```csharp
public string[] ConnectionStringNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettingsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermLinuxFunctionAppStickySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppStickySettings">DataAzurermLinuxFunctionAppStickySettings</a>

---


### DataAzurermLinuxFunctionAppTimeoutsOutputReference <a name="DataAzurermLinuxFunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermLinuxFunctionAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLinuxFunctionApp.DataAzurermLinuxFunctionAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



