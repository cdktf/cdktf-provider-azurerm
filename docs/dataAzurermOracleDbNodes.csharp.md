# `dataAzurermOracleDbNodes` Submodule <a name="`dataAzurermOracleDbNodes` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDbNodes <a name="DataAzurermOracleDbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes azurerm_oracle_db_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleDbNodes(Construct Scope, string Id, DataAzurermOracleDbNodesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig">DataAzurermOracleDbNodesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig">DataAzurermOracleDbNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleDbNodesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleDbNodes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleDbNodes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleDbNodes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleDbNodes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleDbNodes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermOracleDbNodes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleDbNodes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleDbNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDbNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dbNodes">DbNodes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList">DataAzurermOracleDbNodesDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference">DataAzurermOracleDbNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterIdInput">CloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbNodes`<sup>Required</sup> <a name="DbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dbNodes"></a>

```csharp
public DataAzurermOracleDbNodesDbNodesList DbNodes { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList">DataAzurermOracleDbNodesDbNodesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeouts"></a>

```csharp
public DataAzurermOracleDbNodesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference">DataAzurermOracleDbNodesTimeoutsOutputReference</a>

---

##### `CloudVmClusterIdInput`<sup>Optional</sup> <a name="CloudVmClusterIdInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterIdInput"></a>

```csharp
public string CloudVmClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterId"></a>

```csharp
public string CloudVmClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDbNodesConfig <a name="DataAzurermOracleDbNodesConfig" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleDbNodesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudVmClusterId,
    string Id = null,
    DataAzurermOracleDbNodesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.cloudVmClusterId"></a>

```csharp
public string CloudVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleDbNodesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#timeouts DataAzurermOracleDbNodes#timeouts}

---

### DataAzurermOracleDbNodesDbNodes <a name="DataAzurermOracleDbNodesDbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleDbNodesDbNodes {

};
```


### DataAzurermOracleDbNodesTimeouts <a name="DataAzurermOracleDbNodesTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleDbNodesTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDbNodesDbNodesList <a name="DataAzurermOracleDbNodesDbNodesList" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleDbNodesDbNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get"></a>

```csharp
private DataAzurermOracleDbNodesDbNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleDbNodesDbNodesOutputReference <a name="DataAzurermOracleDbNodesDbNodesOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleDbNodesDbNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupIpId">BackupIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnic2Id">BackupVnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnicId">BackupVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbServerId">DbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostIpId">HostIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.maintenanceType">MaintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.softwareStorageSizeInGb">SoftwareStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd">TimeMaintenanceWindowEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart">TimeMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnic2Id">Vnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes">DataAzurermOracleDbNodesDbNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.additionalDetails"></a>

```csharp
public string AdditionalDetails { get; }
```

- *Type:* string

---

##### `BackupIpId`<sup>Required</sup> <a name="BackupIpId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupIpId"></a>

```csharp
public string BackupIpId { get; }
```

- *Type:* string

---

##### `BackupVnic2Id`<sup>Required</sup> <a name="BackupVnic2Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnic2Id"></a>

```csharp
public string BackupVnic2Id { get; }
```

- *Type:* string

---

##### `BackupVnicId`<sup>Required</sup> <a name="BackupVnicId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnicId"></a>

```csharp
public string BackupVnicId { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbServerId"></a>

```csharp
public string DbServerId { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `HostIpId`<sup>Required</sup> <a name="HostIpId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostIpId"></a>

```csharp
public string HostIpId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.maintenanceType"></a>

```csharp
public string MaintenanceType { get; }
```

- *Type:* string

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `SoftwareStorageSizeInGb`<sup>Required</sup> <a name="SoftwareStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.softwareStorageSizeInGb"></a>

```csharp
public double SoftwareStorageSizeInGb { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeMaintenanceWindowEnd`<sup>Required</sup> <a name="TimeMaintenanceWindowEnd" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd"></a>

```csharp
public string TimeMaintenanceWindowEnd { get; }
```

- *Type:* string

---

##### `TimeMaintenanceWindowStart`<sup>Required</sup> <a name="TimeMaintenanceWindowStart" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart"></a>

```csharp
public string TimeMaintenanceWindowStart { get; }
```

- *Type:* string

---

##### `Vnic2Id`<sup>Required</sup> <a name="Vnic2Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnic2Id"></a>

```csharp
public string Vnic2Id { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleDbNodesDbNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes">DataAzurermOracleDbNodesDbNodes</a>

---


### DataAzurermOracleDbNodesTimeoutsOutputReference <a name="DataAzurermOracleDbNodesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleDbNodesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



