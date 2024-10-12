# `dataAzurermMonitorScheduledQueryRulesAlert` Submodule <a name="`dataAzurermMonitorScheduledQueryRulesAlert` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorScheduledQueryRulesAlert <a name="DataAzurermMonitorScheduledQueryRulesAlert" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert azurerm_monitor_scheduled_query_rules_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlert(Construct Scope, string Id, DataAzurermMonitorScheduledQueryRulesAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig">DataAzurermMonitorScheduledQueryRulesAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig">DataAzurermMonitorScheduledQueryRulesAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermMonitorScheduledQueryRulesAlertTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorScheduledQueryRulesAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorScheduledQueryRulesAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorScheduledQueryRulesAlert.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorScheduledQueryRulesAlert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorScheduledQueryRulesAlert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorScheduledQueryRulesAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorScheduledQueryRulesAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList">DataAzurermMonitorScheduledQueryRulesAlertActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.authorizedResourceIds">AuthorizedResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.frequency">Frequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.queryType">QueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.severity">Severity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.throttling">Throttling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeWindow">TimeWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.action"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList">DataAzurermMonitorScheduledQueryRulesAlertActionList</a>

---

##### `AuthorizedResourceIds`<sup>Required</sup> <a name="AuthorizedResourceIds" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.authorizedResourceIds"></a>

```csharp
public string[] AuthorizedResourceIds { get; }
```

- *Type:* string[]

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.frequency"></a>

```csharp
public double Frequency { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.queryType"></a>

```csharp
public string QueryType { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.severity"></a>

```csharp
public double Severity { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Throttling`<sup>Required</sup> <a name="Throttling" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.throttling"></a>

```csharp
public double Throttling { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeouts"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeWindow"></a>

```csharp
public double TimeWindow { get; }
```

- *Type:* double

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.trigger"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertTriggerList Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorScheduledQueryRulesAlertAction <a name="DataAzurermMonitorScheduledQueryRulesAlertAction" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertAction {

};
```


### DataAzurermMonitorScheduledQueryRulesAlertConfig <a name="DataAzurermMonitorScheduledQueryRulesAlertConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertConfig {
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
    DataAzurermMonitorScheduledQueryRulesAlertTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#name DataAzurermMonitorScheduledQueryRulesAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#resource_group_name DataAzurermMonitorScheduledQueryRulesAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#id DataAzurermMonitorScheduledQueryRulesAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#name DataAzurermMonitorScheduledQueryRulesAlert#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#resource_group_name DataAzurermMonitorScheduledQueryRulesAlert#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#id DataAzurermMonitorScheduledQueryRulesAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.timeouts"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#timeouts DataAzurermMonitorScheduledQueryRulesAlert#timeouts}

---

### DataAzurermMonitorScheduledQueryRulesAlertTimeouts <a name="DataAzurermMonitorScheduledQueryRulesAlertTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#read DataAzurermMonitorScheduledQueryRulesAlert#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/data-sources/monitor_scheduled_query_rules_alert#read DataAzurermMonitorScheduledQueryRulesAlert#read}.

---

### DataAzurermMonitorScheduledQueryRulesAlertTrigger <a name="DataAzurermMonitorScheduledQueryRulesAlertTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTrigger {

};
```


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorScheduledQueryRulesAlertActionList <a name="DataAzurermMonitorScheduledQueryRulesAlertActionList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get"></a>

```csharp
private DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup">ActionGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload">CustomWebhookPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject">EmailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction">DataAzurermMonitorScheduledQueryRulesAlertAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionGroup`<sup>Required</sup> <a name="ActionGroup" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup"></a>

```csharp
public string[] ActionGroup { get; }
```

- *Type:* string[]

---

##### `CustomWebhookPayload`<sup>Required</sup> <a name="CustomWebhookPayload" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload"></a>

```csharp
public string CustomWebhookPayload { get; }
```

- *Type:* string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject"></a>

```csharp
public string EmailSubject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction">DataAzurermMonitorScheduledQueryRulesAlertAction</a>

---


### DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerList <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTriggerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get"></a>

```csharp
private DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get"></a>

```csharp
private DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn">MetricColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType">MetricTriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricColumn`<sup>Required</sup> <a name="MetricColumn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn"></a>

```csharp
public string MetricColumn { get; }
```

- *Type:* string

---

##### `MetricTriggerType`<sup>Required</sup> <a name="MetricTriggerType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType"></a>

```csharp
public string MetricTriggerType { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger">MetricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger">DataAzurermMonitorScheduledQueryRulesAlertTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricTrigger`<sup>Required</sup> <a name="MetricTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList MetricTrigger { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorScheduledQueryRulesAlertTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger">DataAzurermMonitorScheduledQueryRulesAlertTrigger</a>

---



