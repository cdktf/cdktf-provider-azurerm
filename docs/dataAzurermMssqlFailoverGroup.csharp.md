# `dataAzurermMssqlFailoverGroup` Submodule <a name="`dataAzurermMssqlFailoverGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMssqlFailoverGroup <a name="DataAzurermMssqlFailoverGroup" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group azurerm_mssql_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroup(Construct Scope, string Id, DataAzurermMssqlFailoverGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig">DataAzurermMssqlFailoverGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig">DataAzurermMssqlFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermMssqlFailoverGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts">DataAzurermMssqlFailoverGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMssqlFailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlFailoverGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlFailoverGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlFailoverGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlFailoverGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermMssqlFailoverGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMssqlFailoverGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMssqlFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMssqlFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.databases">Databases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.partnerServer">PartnerServer</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList">DataAzurermMssqlFailoverGroupPartnerServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference">DataAzurermMssqlFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Databases`<sup>Required</sup> <a name="Databases" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.databases"></a>

```csharp
public string[] Databases { get; }
```

- *Type:* string[]

---

##### `PartnerServer`<sup>Required</sup> <a name="PartnerServer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.partnerServer"></a>

```csharp
public DataAzurermMssqlFailoverGroupPartnerServerList PartnerServer { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList">DataAzurermMssqlFailoverGroupPartnerServerList</a>

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```csharp
public IResolvable ReadonlyEndpointFailoverPolicyEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```csharp
public DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList ReadWriteEndpointFailoverPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeouts"></a>

```csharp
public DataAzurermMssqlFailoverGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference">DataAzurermMssqlFailoverGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMssqlFailoverGroupConfig <a name="DataAzurermMssqlFailoverGroupConfig" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ServerId,
    string Id = null,
    DataAzurermMssqlFailoverGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#name DataAzurermMssqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#server_id DataAzurermMssqlFailoverGroup#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#id DataAzurermMssqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts">DataAzurermMssqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#name DataAzurermMssqlFailoverGroup#name}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#server_id DataAzurermMssqlFailoverGroup#server_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#id DataAzurermMssqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.timeouts"></a>

```csharp
public DataAzurermMssqlFailoverGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts">DataAzurermMssqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#timeouts DataAzurermMssqlFailoverGroup#timeouts}

---

### DataAzurermMssqlFailoverGroupPartnerServer <a name="DataAzurermMssqlFailoverGroupPartnerServer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupPartnerServer {

};
```


### DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy <a name="DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy {

};
```


### DataAzurermMssqlFailoverGroupTimeouts <a name="DataAzurermMssqlFailoverGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#read DataAzurermMssqlFailoverGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/mssql_failover_group#read DataAzurermMssqlFailoverGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMssqlFailoverGroupPartnerServerList <a name="DataAzurermMssqlFailoverGroupPartnerServerList" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupPartnerServerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.get"></a>

```csharp
private DataAzurermMssqlFailoverGroupPartnerServerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMssqlFailoverGroupPartnerServerOutputReference <a name="DataAzurermMssqlFailoverGroupPartnerServerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupPartnerServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer">DataAzurermMssqlFailoverGroupPartnerServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMssqlFailoverGroupPartnerServer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer">DataAzurermMssqlFailoverGroupPartnerServer</a>

---


### DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList <a name="DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.get"></a>

```csharp
private DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">GraceMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GraceMinutes`<sup>Required</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```csharp
public double GraceMinutes { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### DataAzurermMssqlFailoverGroupTimeoutsOutputReference <a name="DataAzurermMssqlFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlFailoverGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



