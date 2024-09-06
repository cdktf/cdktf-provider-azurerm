# `dataAzurermKubernetesNodePoolSnapshot` Submodule <a name="`dataAzurermKubernetesNodePoolSnapshot` Submodule" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesNodePoolSnapshot <a name="DataAzurermKubernetesNodePoolSnapshot" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot azurerm_kubernetes_node_pool_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKubernetesNodePoolSnapshot(Construct Scope, string Id, DataAzurermKubernetesNodePoolSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig">DataAzurermKubernetesNodePoolSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig">DataAzurermKubernetesNodePoolSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermKubernetesNodePoolSnapshotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKubernetesNodePoolSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKubernetesNodePoolSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKubernetesNodePoolSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKubernetesNodePoolSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKubernetesNodePoolSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermKubernetesNodePoolSnapshot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKubernetesNodePoolSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKubernetesNodePoolSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesNodePoolSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.sourceNodePoolId">SourceNodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference">DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `SourceNodePoolId`<sup>Required</sup> <a name="SourceNodePoolId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.sourceNodePoolId"></a>

```csharp
public string SourceNodePoolId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeouts"></a>

```csharp
public DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference">DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesNodePoolSnapshotConfig <a name="DataAzurermKubernetesNodePoolSnapshotConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKubernetesNodePoolSnapshotConfig {
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
    DataAzurermKubernetesNodePoolSnapshotTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.timeouts"></a>

```csharp
public DataAzurermKubernetesNodePoolSnapshotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#timeouts DataAzurermKubernetesNodePoolSnapshot#timeouts}

---

### DataAzurermKubernetesNodePoolSnapshotTimeouts <a name="DataAzurermKubernetesNodePoolSnapshotTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKubernetesNodePoolSnapshotTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#read DataAzurermKubernetesNodePoolSnapshot#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_node_pool_snapshot#read DataAzurermKubernetesNodePoolSnapshot#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference <a name="DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



