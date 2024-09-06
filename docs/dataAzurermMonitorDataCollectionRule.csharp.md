# `dataAzurermMonitorDataCollectionRule` Submodule <a name="`dataAzurermMonitorDataCollectionRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorDataCollectionRule <a name="DataAzurermMonitorDataCollectionRule" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule azurerm_monitor_data_collection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRule(Construct Scope, string Id, DataAzurermMonitorDataCollectionRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig">DataAzurermMonitorDataCollectionRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig">DataAzurermMonitorDataCollectionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermMonitorDataCollectionRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorDataCollectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorDataCollectionRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorDataCollectionRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorDataCollectionRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorDataCollectionRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermMonitorDataCollectionRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorDataCollectionRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorDataCollectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorDataCollectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataCollectionEndpointId">DataCollectionEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataFlow">DataFlow</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList">DataAzurermMonitorDataCollectionRuleDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataSources">DataSources</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList">DataAzurermMonitorDataCollectionRuleDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList">DataAzurermMonitorDataCollectionRuleDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList">DataAzurermMonitorDataCollectionRuleIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.immutableId">ImmutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.streamDeclaration">StreamDeclaration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList">DataAzurermMonitorDataCollectionRuleStreamDeclarationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference">DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataCollectionEndpointId`<sup>Required</sup> <a name="DataCollectionEndpointId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataCollectionEndpointId"></a>

```csharp
public string DataCollectionEndpointId { get; }
```

- *Type:* string

---

##### `DataFlow`<sup>Required</sup> <a name="DataFlow" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataFlow"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataFlowList DataFlow { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList">DataAzurermMonitorDataCollectionRuleDataFlowList</a>

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataSources"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesList DataSources { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList">DataAzurermMonitorDataCollectionRuleDataSourcesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.destinations"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList">DataAzurermMonitorDataCollectionRuleDestinationsList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.identity"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList">DataAzurermMonitorDataCollectionRuleIdentityList</a>

---

##### `ImmutableId`<sup>Required</sup> <a name="ImmutableId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.immutableId"></a>

```csharp
public string ImmutableId { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `StreamDeclaration`<sup>Required</sup> <a name="StreamDeclaration" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.streamDeclaration"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleStreamDeclarationList StreamDeclaration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList">DataAzurermMonitorDataCollectionRuleStreamDeclarationList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeouts"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference">DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorDataCollectionRuleConfig <a name="DataAzurermMonitorDataCollectionRuleConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleConfig {
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
    DataAzurermMonitorDataCollectionRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.timeouts"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#timeouts DataAzurermMonitorDataCollectionRule#timeouts}

---

### DataAzurermMonitorDataCollectionRuleDataFlow <a name="DataAzurermMonitorDataCollectionRuleDataFlow" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataFlow {

};
```


### DataAzurermMonitorDataCollectionRuleDataSources <a name="DataAzurermMonitorDataCollectionRuleDataSources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSources {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImport <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImport" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesDataImport {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesExtension <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtension" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesExtension {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesIisLog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesIisLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesIisLog {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFile <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFile" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFile {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesSyslog {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog {

};
```


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog {

};
```


### DataAzurermMonitorDataCollectionRuleDestinations <a name="DataAzurermMonitorDataCollectionRuleDestinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinations {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsEventHub <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHub" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsEventHub {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount <a name="DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect {

};
```


### DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect {

};
```


### DataAzurermMonitorDataCollectionRuleIdentity <a name="DataAzurermMonitorDataCollectionRuleIdentity" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleIdentity {

};
```


### DataAzurermMonitorDataCollectionRuleStreamDeclaration <a name="DataAzurermMonitorDataCollectionRuleStreamDeclaration" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleStreamDeclaration {

};
```


### DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn {

};
```


### DataAzurermMonitorDataCollectionRuleTimeouts <a name="DataAzurermMonitorDataCollectionRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#read DataAzurermMonitorDataCollectionRule#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/monitor_data_collection_rule#read DataAzurermMonitorDataCollectionRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorDataCollectionRuleDataFlowList <a name="DataAzurermMonitorDataCollectionRuleDataFlowList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataFlowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataFlowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataFlowOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataFlowOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataFlowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform">BuiltInTransform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.destinations">Destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.outputStream">OutputStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.transformKql">TransformKql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow">DataAzurermMonitorDataCollectionRuleDataFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuiltInTransform`<sup>Required</sup> <a name="BuiltInTransform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform"></a>

```csharp
public string BuiltInTransform { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.destinations"></a>

```csharp
public string[] Destinations { get; }
```

- *Type:* string[]

---

##### `OutputStream`<sup>Required</sup> <a name="OutputStream" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.outputStream"></a>

```csharp
public string OutputStream { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `TransformKql`<sup>Required</sup> <a name="TransformKql" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.transformKql"></a>

```csharp
public string TransformKql { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataFlow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow">DataAzurermMonitorDataCollectionRuleDataFlow</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream">Stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup"></a>

```csharp
public string ConsumerGroup { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream"></a>

```csharp
public string Stream { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource">EventHubDataSource</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport">DataAzurermMonitorDataCollectionRuleDataSourcesDataImport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventHubDataSource`<sup>Required</sup> <a name="EventHubDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList EventHubDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesDataImport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport">DataAzurermMonitorDataCollectionRuleDataSourcesDataImport</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson">ExtensionJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName">ExtensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources">InputDataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension">DataAzurermMonitorDataCollectionRuleDataSourcesExtension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtensionJson`<sup>Required</sup> <a name="ExtensionJson" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson"></a>

```csharp
public string ExtensionJson { get; }
```

- *Type:* string

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName"></a>

```csharp
public string ExtensionName { get; }
```

- *Type:* string

---

##### `InputDataSources`<sup>Required</sup> <a name="InputDataSources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources"></a>

```csharp
public string[] InputDataSources { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesExtension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension">DataAzurermMonitorDataCollectionRuleDataSourcesExtension</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories">LogDirectories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog">DataAzurermMonitorDataCollectionRuleDataSourcesIisLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogDirectories`<sup>Required</sup> <a name="LogDirectories" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories"></a>

```csharp
public string[] LogDirectories { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesIisLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog">DataAzurermMonitorDataCollectionRuleDataSourcesIisLog</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns">FilePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile">DataAzurermMonitorDataCollectionRuleDataSourcesLogFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilePatterns`<sup>Required</sup> <a name="FilePatterns" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns"></a>

```csharp
public string[] FilePatterns { get; }
```

- *Type:* string[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList</a>

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesLogFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile">DataAzurermMonitorDataCollectionRuleDataSourcesLogFile</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList Text { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat">RecordStartTimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordStartTimestampFormat`<sup>Required</sup> <a name="RecordStartTimestampFormat" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat"></a>

```csharp
public string RecordStartTimestampFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport">DataImport</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList">DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog">IisLog</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList">DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.logFile">LogFile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter">PerformanceCounter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry">PlatformTelemetry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder">PrometheusForwarder</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.syslog">Syslog</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList">DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog">WindowsEventLog</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog">WindowsFirewallLog</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources">DataAzurermMonitorDataCollectionRuleDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataImport`<sup>Required</sup> <a name="DataImport" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList DataImport { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.extension"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList">DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList</a>

---

##### `IisLog`<sup>Required</sup> <a name="IisLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList IisLog { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList">DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList</a>

---

##### `LogFile`<sup>Required</sup> <a name="LogFile" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.logFile"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList LogFile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList</a>

---

##### `PerformanceCounter`<sup>Required</sup> <a name="PerformanceCounter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList PerformanceCounter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList</a>

---

##### `PlatformTelemetry`<sup>Required</sup> <a name="PlatformTelemetry" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList PlatformTelemetry { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a>

---

##### `PrometheusForwarder`<sup>Required</sup> <a name="PrometheusForwarder" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList PrometheusForwarder { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a>

---

##### `Syslog`<sup>Required</sup> <a name="Syslog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.syslog"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList Syslog { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList">DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList</a>

---

##### `WindowsEventLog`<sup>Required</sup> <a name="WindowsEventLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList WindowsEventLog { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList</a>

---

##### `WindowsFirewallLog`<sup>Required</sup> <a name="WindowsFirewallLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList WindowsFirewallLog { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources">DataAzurermMonitorDataCollectionRuleDataSources</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers">CounterSpecifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds">SamplingFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CounterSpecifiers`<sup>Required</sup> <a name="CounterSpecifiers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers"></a>

```csharp
public string[] CounterSpecifiers { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SamplingFrequencyInSeconds`<sup>Required</sup> <a name="SamplingFrequencyInSeconds" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds"></a>

```csharp
public double SamplingFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter">LabelIncludeFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelIncludeFilter`<sup>Required</sup> <a name="LabelIncludeFilter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList LabelIncludeFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames">FacilityNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels">LogLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog">DataAzurermMonitorDataCollectionRuleDataSourcesSyslog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FacilityNames`<sup>Required</sup> <a name="FacilityNames" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames"></a>

```csharp
public string[] FacilityNames { get; }
```

- *Type:* string[]

---

##### `LogLevels`<sup>Required</sup> <a name="LogLevels" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels"></a>

```csharp
public string[] LogLevels { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesSyslog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog">DataAzurermMonitorDataCollectionRuleDataSourcesSyslog</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries">XPathQueries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `XPathQueries`<sup>Required</sup> <a name="XPathQueries" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries"></a>

```csharp
public string[] XPathQueries { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams">Streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Streams`<sup>Required</sup> <a name="Streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams"></a>

```csharp
public string[] Streams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId">EventHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventHubId`<sup>Required</sup> <a name="EventHubId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId"></a>

```csharp
public string EventHubId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubList <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsEventHubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId">EventHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub">DataAzurermMonitorDataCollectionRuleDestinationsEventHub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventHubId`<sup>Required</sup> <a name="EventHubId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId"></a>

```csharp
public string EventHubId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsEventHub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub">DataAzurermMonitorDataCollectionRuleDestinationsEventHub</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId">WorkspaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkspaceResourceId`<sup>Required</sup> <a name="WorkspaceResourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId"></a>

```csharp
public string WorkspaceResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList <a name="DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId">MonitorAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MonitorAccountId`<sup>Required</sup> <a name="MonitorAccountId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId"></a>

```csharp
public string MonitorAccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics">AzureMonitorMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHub">EventHub</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect">EventHubDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics">LogAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount">MonitorAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob">StorageBlob</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect">StorageBlobDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect">StorageTableDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations">DataAzurermMonitorDataCollectionRuleDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureMonitorMetrics`<sup>Required</sup> <a name="AzureMonitorMetrics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList AzureMonitorMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList</a>

---

##### `EventHub`<sup>Required</sup> <a name="EventHub" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHub"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsEventHubList EventHub { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubList</a>

---

##### `EventHubDirect`<sup>Required</sup> <a name="EventHubDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList EventHubDirect { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList</a>

---

##### `LogAnalytics`<sup>Required</sup> <a name="LogAnalytics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList LogAnalytics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList</a>

---

##### `MonitorAccount`<sup>Required</sup> <a name="MonitorAccount" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList MonitorAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList</a>

---

##### `StorageBlob`<sup>Required</sup> <a name="StorageBlob" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList StorageBlob { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList</a>

---

##### `StorageBlobDirect`<sup>Required</sup> <a name="StorageBlobDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList StorageBlobDirect { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList</a>

---

##### `StorageTableDirect`<sup>Required</sup> <a name="StorageTableDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList StorageTableDirect { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations">DataAzurermMonitorDataCollectionRuleDestinations</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect</a>

---


### DataAzurermMonitorDataCollectionRuleIdentityList <a name="DataAzurermMonitorDataCollectionRuleIdentityList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleIdentityOutputReference <a name="DataAzurermMonitorDataCollectionRuleIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity">DataAzurermMonitorDataCollectionRuleIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity">DataAzurermMonitorDataCollectionRuleIdentity</a>

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn</a>

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationList <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleStreamDeclarationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.get"></a>

```csharp
private DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration">DataAzurermMonitorDataCollectionRuleStreamDeclaration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.column"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList Column { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList</a>

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorDataCollectionRuleStreamDeclaration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration">DataAzurermMonitorDataCollectionRuleStreamDeclaration</a>

---


### DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference <a name="DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



