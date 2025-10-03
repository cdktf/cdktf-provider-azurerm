# `dataAzurermOracleAdbsNationalCharacterSets` Submodule <a name="`dataAzurermOracleAdbsNationalCharacterSets` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAdbsNationalCharacterSets <a name="DataAzurermOracleAdbsNationalCharacterSets" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets azurerm_oracle_adbs_national_character_sets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAdbsNationalCharacterSets(Construct Scope, string Id, DataAzurermOracleAdbsNationalCharacterSetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig">DataAzurermOracleAdbsNationalCharacterSetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig">DataAzurermOracleAdbsNationalCharacterSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleAdbsNationalCharacterSetsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAdbsNationalCharacterSets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAdbsNationalCharacterSets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAdbsNationalCharacterSets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAdbsNationalCharacterSets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAdbsNationalCharacterSets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermOracleAdbsNationalCharacterSets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAdbsNationalCharacterSets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAdbsNationalCharacterSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAdbsNationalCharacterSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.characterSets">CharacterSets</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList">DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.location">Location</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CharacterSets`<sup>Required</sup> <a name="CharacterSets" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.characterSets"></a>

```csharp
public DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList CharacterSets { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList">DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeouts"></a>

```csharp
public DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAdbsNationalCharacterSetsCharacterSets <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSets" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAdbsNationalCharacterSetsCharacterSets {

};
```


### DataAzurermOracleAdbsNationalCharacterSetsConfig <a name="DataAzurermOracleAdbsNationalCharacterSetsConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAdbsNationalCharacterSetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Id = null,
    DataAzurermOracleAdbsNationalCharacterSetsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleAdbsNationalCharacterSetsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#timeouts DataAzurermOracleAdbsNationalCharacterSets#timeouts}

---

### DataAzurermOracleAdbsNationalCharacterSetsTimeouts <a name="DataAzurermOracleAdbsNationalCharacterSetsTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAdbsNationalCharacterSetsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#read DataAzurermOracleAdbsNationalCharacterSets#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_adbs_national_character_sets#read DataAzurermOracleAdbsNationalCharacterSets#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get"></a>

```csharp
private DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets">DataAzurermOracleAdbsNationalCharacterSetsCharacterSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleAdbsNationalCharacterSetsCharacterSets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets">DataAzurermOracleAdbsNationalCharacterSetsCharacterSets</a>

---


### DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference <a name="DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



