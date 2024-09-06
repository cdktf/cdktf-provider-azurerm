# `dataAzurermPrivateDnsSrvRecord` Submodule <a name="`dataAzurermPrivateDnsSrvRecord` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsSrvRecord <a name="DataAzurermPrivateDnsSrvRecord" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record azurerm_private_dns_srv_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsSrvRecord(Construct Scope, string Id, DataAzurermPrivateDnsSrvRecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig">DataAzurermPrivateDnsSrvRecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig">DataAzurermPrivateDnsSrvRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermPrivateDnsSrvRecordTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeouts">DataAzurermPrivateDnsSrvRecordTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsSrvRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateDnsSrvRecord.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateDnsSrvRecord.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateDnsSrvRecord.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateDnsSrvRecord.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermPrivateDnsSrvRecord resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateDnsSrvRecord to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateDnsSrvRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsSrvRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.record">Record</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList">DataAzurermPrivateDnsSrvRecordRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference">DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.zoneNameInput">ZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Record`<sup>Required</sup> <a name="Record" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.record"></a>

```csharp
public DataAzurermPrivateDnsSrvRecordRecordList Record { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList">DataAzurermPrivateDnsSrvRecordRecordList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.timeouts"></a>

```csharp
public DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference">DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.zoneNameInput"></a>

```csharp
public string ZoneNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecord.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsSrvRecordConfig <a name="DataAzurermPrivateDnsSrvRecordConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsSrvRecordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string ZoneName,
    string Id = null,
    DataAzurermPrivateDnsSrvRecordTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#name DataAzurermPrivateDnsSrvRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#resource_group_name DataAzurermPrivateDnsSrvRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.zoneName">ZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#zone_name DataAzurermPrivateDnsSrvRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#id DataAzurermPrivateDnsSrvRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeouts">DataAzurermPrivateDnsSrvRecordTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#name DataAzurermPrivateDnsSrvRecord#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#resource_group_name DataAzurermPrivateDnsSrvRecord#resource_group_name}.

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.zoneName"></a>

```csharp
public string ZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#zone_name DataAzurermPrivateDnsSrvRecord#zone_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#id DataAzurermPrivateDnsSrvRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordConfig.property.timeouts"></a>

```csharp
public DataAzurermPrivateDnsSrvRecordTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeouts">DataAzurermPrivateDnsSrvRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#timeouts DataAzurermPrivateDnsSrvRecord#timeouts}

---

### DataAzurermPrivateDnsSrvRecordRecord <a name="DataAzurermPrivateDnsSrvRecordRecord" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsSrvRecordRecord {

};
```


### DataAzurermPrivateDnsSrvRecordTimeouts <a name="DataAzurermPrivateDnsSrvRecordTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsSrvRecordTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#read DataAzurermPrivateDnsSrvRecord#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/private_dns_srv_record#read DataAzurermPrivateDnsSrvRecord#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsSrvRecordRecordList <a name="DataAzurermPrivateDnsSrvRecordRecordList" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsSrvRecordRecordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.get"></a>

```csharp
private DataAzurermPrivateDnsSrvRecordRecordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermPrivateDnsSrvRecordRecordOutputReference <a name="DataAzurermPrivateDnsSrvRecordRecordOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsSrvRecordRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecord">DataAzurermPrivateDnsSrvRecordRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecordOutputReference.property.internalValue"></a>

```csharp
public DataAzurermPrivateDnsSrvRecordRecord InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordRecord">DataAzurermPrivateDnsSrvRecordRecord</a>

---


### DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference <a name="DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsSrvRecord.DataAzurermPrivateDnsSrvRecordTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



