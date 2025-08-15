# `dataAzurermOracleCloudVmCluster` Submodule <a name="`dataAzurermOracleCloudVmCluster` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleCloudVmCluster <a name="DataAzurermOracleCloudVmCluster" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster azurerm_oracle_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmCluster(Construct Scope, string Id, DataAzurermOracleCloudVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig">DataAzurermOracleCloudVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig">DataAzurermOracleCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleCloudVmClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleCloudVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleCloudVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleCloudVmCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleCloudVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermOracleCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleCloudVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.computeNodes">ComputeNodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList">DataAzurermOracleCloudVmClusterDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.fileSystemConfiguration">FileSystemConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList">DataAzurermOracleCloudVmClusterFileSystemConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.giVersion">GiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostnameActual">HostnameActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList">DataAzurermOracleCloudVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lastUpdateHistoryEntryId">LastUpdateHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nsgUrl">NsgUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsName">ScanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanIpIds">ScanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.storageSizeInGbs">StorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetOcid">SubnetOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.systemVersion">SystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference">DataAzurermOracleCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.vipOds">VipOds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `ComputeNodes`<sup>Required</sup> <a name="ComputeNodes" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.computeNodes"></a>

```csharp
public string[] ComputeNodes { get; }
```

- *Type:* string[]

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataCollectionOptions"></a>

```csharp
public DataAzurermOracleCloudVmClusterDataCollectionOptionsList DataCollectionOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList">DataAzurermOracleCloudVmClusterDataCollectionOptionsList</a>

---

##### `DataStoragePercentage`<sup>Required</sup> <a name="DataStoragePercentage" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStoragePercentage"></a>

```csharp
public double DataStoragePercentage { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FileSystemConfiguration`<sup>Required</sup> <a name="FileSystemConfiguration" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.fileSystemConfiguration"></a>

```csharp
public DataAzurermOracleCloudVmClusterFileSystemConfigurationList FileSystemConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList">DataAzurermOracleCloudVmClusterFileSystemConfigurationList</a>

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.giVersion"></a>

```csharp
public string GiVersion { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `HostnameActual`<sup>Required</sup> <a name="HostnameActual" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostnameActual"></a>

```csharp
public string HostnameActual { get; }
```

- *Type:* string

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.iormConfigCache"></a>

```csharp
public DataAzurermOracleCloudVmClusterIormConfigCacheList IormConfigCache { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList">DataAzurermOracleCloudVmClusterIormConfigCacheList</a>

---

##### `LastUpdateHistoryEntryId`<sup>Required</sup> <a name="LastUpdateHistoryEntryId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lastUpdateHistoryEntryId"></a>

```csharp
public string LastUpdateHistoryEntryId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `LocalBackupEnabled`<sup>Required</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.localBackupEnabled"></a>

```csharp
public IResolvable LocalBackupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NsgUrl`<sup>Required</sup> <a name="NsgUrl" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nsgUrl"></a>

```csharp
public string NsgUrl { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsName"></a>

```csharp
public string ScanDnsName { get; }
```

- *Type:* string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsRecordId"></a>

```csharp
public string ScanDnsRecordId { get; }
```

- *Type:* string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanIpIds"></a>

```csharp
public string[] ScanIpIds { get; }
```

- *Type:* string[]

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcpSsl"></a>

```csharp
public double ScanListenerPortTcpSsl { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SparseDiskgroupEnabled`<sup>Required</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sparseDiskgroupEnabled"></a>

```csharp
public IResolvable SparseDiskgroupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `StorageSizeInGbs`<sup>Required</sup> <a name="StorageSizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.storageSizeInGbs"></a>

```csharp
public double StorageSizeInGbs { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SubnetOcid`<sup>Required</sup> <a name="SubnetOcid" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetOcid"></a>

```csharp
public string SubnetOcid { get; }
```

- *Type:* string

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.systemVersion"></a>

```csharp
public string SystemVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeouts"></a>

```csharp
public DataAzurermOracleCloudVmClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference">DataAzurermOracleCloudVmClusterTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VipOds`<sup>Required</sup> <a name="VipOds" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.vipOds"></a>

```csharp
public string[] VipOds { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleCloudVmClusterConfig <a name="DataAzurermOracleCloudVmClusterConfig" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterConfig {
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
    DataAzurermOracleCloudVmClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#name DataAzurermOracleCloudVmCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#resource_group_name DataAzurermOracleCloudVmCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#id DataAzurermOracleCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#name DataAzurermOracleCloudVmCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#resource_group_name DataAzurermOracleCloudVmCluster#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#id DataAzurermOracleCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleCloudVmClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#timeouts DataAzurermOracleCloudVmCluster#timeouts}

---

### DataAzurermOracleCloudVmClusterDataCollectionOptions <a name="DataAzurermOracleCloudVmClusterDataCollectionOptions" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterDataCollectionOptions {

};
```


### DataAzurermOracleCloudVmClusterFileSystemConfiguration <a name="DataAzurermOracleCloudVmClusterFileSystemConfiguration" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterFileSystemConfiguration {

};
```


### DataAzurermOracleCloudVmClusterIormConfigCache <a name="DataAzurermOracleCloudVmClusterIormConfigCache" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterIormConfigCache {

};
```


### DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans <a name="DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans {

};
```


### DataAzurermOracleCloudVmClusterTimeouts <a name="DataAzurermOracleCloudVmClusterTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#read DataAzurermOracleCloudVmCluster#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_cloud_vm_cluster#read DataAzurermOracleCloudVmCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleCloudVmClusterDataCollectionOptionsList <a name="DataAzurermOracleCloudVmClusterDataCollectionOptionsList" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterDataCollectionOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.get"></a>

```csharp
private DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference <a name="DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions">DataAzurermOracleCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiagnosticsEventsEnabled`<sup>Required</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```csharp
public IResolvable DiagnosticsEventsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HealthMonitoringEnabled`<sup>Required</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```csharp
public IResolvable HealthMonitoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncidentLogsEnabled`<sup>Required</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```csharp
public IResolvable IncidentLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleCloudVmClusterDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions">DataAzurermOracleCloudVmClusterDataCollectionOptions</a>

---


### DataAzurermOracleCloudVmClusterFileSystemConfigurationList <a name="DataAzurermOracleCloudVmClusterFileSystemConfigurationList" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterFileSystemConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.get"></a>

```csharp
private DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference <a name="DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.sizeInGb">SizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfiguration">DataAzurermOracleCloudVmClusterFileSystemConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `SizeInGb`<sup>Required</sup> <a name="SizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.sizeInGb"></a>

```csharp
public double SizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleCloudVmClusterFileSystemConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterFileSystemConfiguration">DataAzurermOracleCloudVmClusterFileSystemConfiguration</a>

---


### DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList <a name="DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.get"></a>

```csharp
private DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference <a name="DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```csharp
public string FlashCacheLimit { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```csharp
public double Share { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans</a>

---


### DataAzurermOracleCloudVmClusterIormConfigCacheList <a name="DataAzurermOracleCloudVmClusterIormConfigCacheList" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterIormConfigCacheList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.get"></a>

```csharp
private DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference <a name="DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache">DataAzurermOracleCloudVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```csharp
public DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList DbPlans { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.objective"></a>

```csharp
public string Objective { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleCloudVmClusterIormConfigCache InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache">DataAzurermOracleCloudVmClusterIormConfigCache</a>

---


### DataAzurermOracleCloudVmClusterTimeoutsOutputReference <a name="DataAzurermOracleCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleCloudVmClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



