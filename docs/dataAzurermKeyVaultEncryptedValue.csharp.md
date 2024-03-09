# `dataAzurermKeyVaultEncryptedValue` Submodule <a name="`dataAzurermKeyVaultEncryptedValue` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultEncryptedValue <a name="DataAzurermKeyVaultEncryptedValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value azurerm_key_vault_encrypted_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultEncryptedValue(Construct Scope, string Id, DataAzurermKeyVaultEncryptedValueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig">DataAzurermKeyVaultEncryptedValueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig">DataAzurermKeyVaultEncryptedValueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData">ResetEncryptedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue">ResetPlainTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermKeyVaultEncryptedValueTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

---

##### `ResetEncryptedData` <a name="ResetEncryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData"></a>

```csharp
private void ResetEncryptedData()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlainTextValue` <a name="ResetPlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue"></a>

```csharp
private void ResetPlainTextValue()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultEncryptedValue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultEncryptedValue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultEncryptedValue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultEncryptedValue.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultEncryptedValue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermKeyVaultEncryptedValue resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKeyVaultEncryptedValue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKeyVaultEncryptedValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultEncryptedValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.decodedPlainTextValue">DecodedPlainTextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput">EncryptedDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput">PlainTextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData">EncryptedData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue">PlainTextValue</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DecodedPlainTextValue`<sup>Required</sup> <a name="DecodedPlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.decodedPlainTextValue"></a>

```csharp
public string DecodedPlainTextValue { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts"></a>

```csharp
public DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `EncryptedDataInput`<sup>Optional</sup> <a name="EncryptedDataInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput"></a>

```csharp
public string EncryptedDataInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `PlainTextValueInput`<sup>Optional</sup> <a name="PlainTextValueInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput"></a>

```csharp
public string PlainTextValueInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `EncryptedData`<sup>Required</sup> <a name="EncryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData"></a>

```csharp
public string EncryptedData { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `PlainTextValue`<sup>Required</sup> <a name="PlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue"></a>

```csharp
public string PlainTextValue { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultEncryptedValueConfig <a name="DataAzurermKeyVaultEncryptedValueConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultEncryptedValueConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Algorithm,
    string KeyVaultKeyId,
    string EncryptedData = null,
    string Id = null,
    string PlainTextValue = null,
    DataAzurermKeyVaultEncryptedValueTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData">EncryptedData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue">PlainTextValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}.

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}.

---

##### `EncryptedData`<sup>Optional</sup> <a name="EncryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData"></a>

```csharp
public string EncryptedData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlainTextValue`<sup>Optional</sup> <a name="PlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue"></a>

```csharp
public string PlainTextValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts"></a>

```csharp
public DataAzurermKeyVaultEncryptedValueTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#timeouts DataAzurermKeyVaultEncryptedValue#timeouts}

---

### DataAzurermKeyVaultEncryptedValueTimeouts <a name="DataAzurermKeyVaultEncryptedValueTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultEncryptedValueTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference <a name="DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



