# `dataAzurermElasticSanVolumeSnapshot` Submodule <a name="`dataAzurermElasticSanVolumeSnapshot` Submodule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermElasticSanVolumeSnapshot <a name="DataAzurermElasticSanVolumeSnapshot" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot azurerm_elastic_san_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticSanVolumeSnapshot(Construct Scope, string Id, DataAzurermElasticSanVolumeSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig">DataAzurermElasticSanVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig">DataAzurermElasticSanVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermElasticSanVolumeSnapshotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeouts">DataAzurermElasticSanVolumeSnapshotTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermElasticSanVolumeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticSanVolumeSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticSanVolumeSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticSanVolumeSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticSanVolumeSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermElasticSanVolumeSnapshot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermElasticSanVolumeSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermElasticSanVolumeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermElasticSanVolumeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.sourceVolumeSizeInGib">SourceVolumeSizeInGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference">DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.volumeGroupIdInput">VolumeGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.volumeGroupId">VolumeGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `SourceVolumeSizeInGib`<sup>Required</sup> <a name="SourceVolumeSizeInGib" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.sourceVolumeSizeInGib"></a>

```csharp
public double SourceVolumeSizeInGib { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.timeouts"></a>

```csharp
public DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference">DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference</a>

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeGroupIdInput`<sup>Optional</sup> <a name="VolumeGroupIdInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.volumeGroupIdInput"></a>

```csharp
public string VolumeGroupIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VolumeGroupId`<sup>Required</sup> <a name="VolumeGroupId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.volumeGroupId"></a>

```csharp
public string VolumeGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermElasticSanVolumeSnapshotConfig <a name="DataAzurermElasticSanVolumeSnapshotConfig" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticSanVolumeSnapshotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string VolumeGroupId,
    string Id = null,
    DataAzurermElasticSanVolumeSnapshotTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#name DataAzurermElasticSanVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.volumeGroupId">VolumeGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#volume_group_id DataAzurermElasticSanVolumeSnapshot#volume_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#id DataAzurermElasticSanVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeouts">DataAzurermElasticSanVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#name DataAzurermElasticSanVolumeSnapshot#name}.

---

##### `VolumeGroupId`<sup>Required</sup> <a name="VolumeGroupId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.volumeGroupId"></a>

```csharp
public string VolumeGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#volume_group_id DataAzurermElasticSanVolumeSnapshot#volume_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#id DataAzurermElasticSanVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotConfig.property.timeouts"></a>

```csharp
public DataAzurermElasticSanVolumeSnapshotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeouts">DataAzurermElasticSanVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#timeouts DataAzurermElasticSanVolumeSnapshot#timeouts}

---

### DataAzurermElasticSanVolumeSnapshotTimeouts <a name="DataAzurermElasticSanVolumeSnapshotTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticSanVolumeSnapshotTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#read DataAzurermElasticSanVolumeSnapshot#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/elastic_san_volume_snapshot#read DataAzurermElasticSanVolumeSnapshot#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference <a name="DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeSnapshot.DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



