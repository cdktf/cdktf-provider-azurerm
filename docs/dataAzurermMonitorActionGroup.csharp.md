# `dataAzurermMonitorActionGroup` Submodule <a name="`dataAzurermMonitorActionGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorActionGroup <a name="DataAzurermMonitorActionGroup" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group azurerm_monitor_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroup(Construct Scope, string Id, DataAzurermMonitorActionGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig">DataAzurermMonitorActionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig">DataAzurermMonitorActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermMonitorActionGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorActionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorActionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorActionGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMonitorActionGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermMonitorActionGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorActionGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.armRoleReceiver">ArmRoleReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList">DataAzurermMonitorActionGroupArmRoleReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.automationRunbookReceiver">AutomationRunbookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList">DataAzurermMonitorActionGroupAutomationRunbookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureAppPushReceiver">AzureAppPushReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList">DataAzurermMonitorActionGroupAzureAppPushReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureFunctionReceiver">AzureFunctionReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList">DataAzurermMonitorActionGroupAzureFunctionReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.emailReceiver">EmailReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList">DataAzurermMonitorActionGroupEmailReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.eventHubReceiver">EventHubReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList">DataAzurermMonitorActionGroupEventHubReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.itsmReceiver">ItsmReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList">DataAzurermMonitorActionGroupItsmReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.logicAppReceiver">LogicAppReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList">DataAzurermMonitorActionGroupLogicAppReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.smsReceiver">SmsReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList">DataAzurermMonitorActionGroupSmsReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference">DataAzurermMonitorActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.voiceReceiver">VoiceReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList">DataAzurermMonitorActionGroupVoiceReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.webhookReceiver">WebhookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList">DataAzurermMonitorActionGroupWebhookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ArmRoleReceiver`<sup>Required</sup> <a name="ArmRoleReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.armRoleReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupArmRoleReceiverList ArmRoleReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList">DataAzurermMonitorActionGroupArmRoleReceiverList</a>

---

##### `AutomationRunbookReceiver`<sup>Required</sup> <a name="AutomationRunbookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.automationRunbookReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupAutomationRunbookReceiverList AutomationRunbookReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList">DataAzurermMonitorActionGroupAutomationRunbookReceiverList</a>

---

##### `AzureAppPushReceiver`<sup>Required</sup> <a name="AzureAppPushReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureAppPushReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupAzureAppPushReceiverList AzureAppPushReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList">DataAzurermMonitorActionGroupAzureAppPushReceiverList</a>

---

##### `AzureFunctionReceiver`<sup>Required</sup> <a name="AzureFunctionReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureFunctionReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupAzureFunctionReceiverList AzureFunctionReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList">DataAzurermMonitorActionGroupAzureFunctionReceiverList</a>

---

##### `EmailReceiver`<sup>Required</sup> <a name="EmailReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.emailReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupEmailReceiverList EmailReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList">DataAzurermMonitorActionGroupEmailReceiverList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EventHubReceiver`<sup>Required</sup> <a name="EventHubReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.eventHubReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupEventHubReceiverList EventHubReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList">DataAzurermMonitorActionGroupEventHubReceiverList</a>

---

##### `ItsmReceiver`<sup>Required</sup> <a name="ItsmReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.itsmReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupItsmReceiverList ItsmReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList">DataAzurermMonitorActionGroupItsmReceiverList</a>

---

##### `LogicAppReceiver`<sup>Required</sup> <a name="LogicAppReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.logicAppReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupLogicAppReceiverList LogicAppReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList">DataAzurermMonitorActionGroupLogicAppReceiverList</a>

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `SmsReceiver`<sup>Required</sup> <a name="SmsReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.smsReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupSmsReceiverList SmsReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList">DataAzurermMonitorActionGroupSmsReceiverList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeouts"></a>

```csharp
public DataAzurermMonitorActionGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference">DataAzurermMonitorActionGroupTimeoutsOutputReference</a>

---

##### `VoiceReceiver`<sup>Required</sup> <a name="VoiceReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.voiceReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupVoiceReceiverList VoiceReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList">DataAzurermMonitorActionGroupVoiceReceiverList</a>

---

##### `WebhookReceiver`<sup>Required</sup> <a name="WebhookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.webhookReceiver"></a>

```csharp
public DataAzurermMonitorActionGroupWebhookReceiverList WebhookReceiver { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList">DataAzurermMonitorActionGroupWebhookReceiverList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorActionGroupArmRoleReceiver <a name="DataAzurermMonitorActionGroupArmRoleReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupArmRoleReceiver {

};
```


### DataAzurermMonitorActionGroupAutomationRunbookReceiver <a name="DataAzurermMonitorActionGroupAutomationRunbookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAutomationRunbookReceiver {

};
```


### DataAzurermMonitorActionGroupAzureAppPushReceiver <a name="DataAzurermMonitorActionGroupAzureAppPushReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAzureAppPushReceiver {

};
```


### DataAzurermMonitorActionGroupAzureFunctionReceiver <a name="DataAzurermMonitorActionGroupAzureFunctionReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAzureFunctionReceiver {

};
```


### DataAzurermMonitorActionGroupConfig <a name="DataAzurermMonitorActionGroupConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupConfig {
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
    DataAzurermMonitorActionGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#name DataAzurermMonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#resource_group_name DataAzurermMonitorActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#id DataAzurermMonitorActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#name DataAzurermMonitorActionGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#resource_group_name DataAzurermMonitorActionGroup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#id DataAzurermMonitorActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.timeouts"></a>

```csharp
public DataAzurermMonitorActionGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#timeouts DataAzurermMonitorActionGroup#timeouts}

---

### DataAzurermMonitorActionGroupEmailReceiver <a name="DataAzurermMonitorActionGroupEmailReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupEmailReceiver {

};
```


### DataAzurermMonitorActionGroupEventHubReceiver <a name="DataAzurermMonitorActionGroupEventHubReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupEventHubReceiver {

};
```


### DataAzurermMonitorActionGroupItsmReceiver <a name="DataAzurermMonitorActionGroupItsmReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupItsmReceiver {

};
```


### DataAzurermMonitorActionGroupLogicAppReceiver <a name="DataAzurermMonitorActionGroupLogicAppReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupLogicAppReceiver {

};
```


### DataAzurermMonitorActionGroupSmsReceiver <a name="DataAzurermMonitorActionGroupSmsReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupSmsReceiver {

};
```


### DataAzurermMonitorActionGroupTimeouts <a name="DataAzurermMonitorActionGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#read DataAzurermMonitorActionGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/monitor_action_group#read DataAzurermMonitorActionGroup#read}.

---

### DataAzurermMonitorActionGroupVoiceReceiver <a name="DataAzurermMonitorActionGroupVoiceReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupVoiceReceiver {

};
```


### DataAzurermMonitorActionGroupWebhookReceiver <a name="DataAzurermMonitorActionGroupWebhookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupWebhookReceiver {

};
```


### DataAzurermMonitorActionGroupWebhookReceiverAadAuth <a name="DataAzurermMonitorActionGroupWebhookReceiverAadAuth" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupWebhookReceiverAadAuth {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorActionGroupArmRoleReceiverList <a name="DataAzurermMonitorActionGroupArmRoleReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupArmRoleReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupArmRoleReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupArmRoleReceiverOutputReference <a name="DataAzurermMonitorActionGroupArmRoleReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupArmRoleReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver">DataAzurermMonitorActionGroupArmRoleReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema"></a>

```csharp
public IResolvable UseCommonAlertSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupArmRoleReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver">DataAzurermMonitorActionGroupArmRoleReceiver</a>

---


### DataAzurermMonitorActionGroupAutomationRunbookReceiverList <a name="DataAzurermMonitorActionGroupAutomationRunbookReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAutomationRunbookReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference <a name="DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId">AutomationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook">IsGlobalRunbook</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName">RunbookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId">WebhookResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver">DataAzurermMonitorActionGroupAutomationRunbookReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId"></a>

```csharp
public string AutomationAccountId { get; }
```

- *Type:* string

---

##### `IsGlobalRunbook`<sup>Required</sup> <a name="IsGlobalRunbook" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook"></a>

```csharp
public IResolvable IsGlobalRunbook { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookName`<sup>Required</sup> <a name="RunbookName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName"></a>

```csharp
public string RunbookName { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema"></a>

```csharp
public IResolvable UseCommonAlertSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `WebhookResourceId`<sup>Required</sup> <a name="WebhookResourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId"></a>

```csharp
public string WebhookResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupAutomationRunbookReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver">DataAzurermMonitorActionGroupAutomationRunbookReceiver</a>

---


### DataAzurermMonitorActionGroupAzureAppPushReceiverList <a name="DataAzurermMonitorActionGroupAzureAppPushReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAzureAppPushReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference <a name="DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver">DataAzurermMonitorActionGroupAzureAppPushReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupAzureAppPushReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver">DataAzurermMonitorActionGroupAzureAppPushReceiver</a>

---


### DataAzurermMonitorActionGroupAzureFunctionReceiverList <a name="DataAzurermMonitorActionGroupAzureFunctionReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAzureFunctionReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference <a name="DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId">FunctionAppResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl">HttpTriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver">DataAzurermMonitorActionGroupAzureFunctionReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionAppResourceId`<sup>Required</sup> <a name="FunctionAppResourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId"></a>

```csharp
public string FunctionAppResourceId { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `HttpTriggerUrl`<sup>Required</sup> <a name="HttpTriggerUrl" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl"></a>

```csharp
public string HttpTriggerUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema"></a>

```csharp
public IResolvable UseCommonAlertSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupAzureFunctionReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver">DataAzurermMonitorActionGroupAzureFunctionReceiver</a>

---


### DataAzurermMonitorActionGroupEmailReceiverList <a name="DataAzurermMonitorActionGroupEmailReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupEmailReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupEmailReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupEmailReceiverOutputReference <a name="DataAzurermMonitorActionGroupEmailReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupEmailReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver">DataAzurermMonitorActionGroupEmailReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema"></a>

```csharp
public IResolvable UseCommonAlertSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupEmailReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver">DataAzurermMonitorActionGroupEmailReceiver</a>

---


### DataAzurermMonitorActionGroupEventHubReceiverList <a name="DataAzurermMonitorActionGroupEventHubReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupEventHubReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupEventHubReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupEventHubReceiverOutputReference <a name="DataAzurermMonitorActionGroupEventHubReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupEventHubReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubId">EventHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubName">EventHubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace">EventHubNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver">DataAzurermMonitorActionGroupEventHubReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventHubId`<sup>Required</sup> <a name="EventHubId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubId"></a>

```csharp
public string EventHubId { get; }
```

- *Type:* string

---

##### `EventHubName`<sup>Required</sup> <a name="EventHubName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubName"></a>

```csharp
public string EventHubName { get; }
```

- *Type:* string

---

##### `EventHubNamespace`<sup>Required</sup> <a name="EventHubNamespace" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace"></a>

```csharp
public string EventHubNamespace { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema"></a>

```csharp
public IResolvable UseCommonAlertSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupEventHubReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver">DataAzurermMonitorActionGroupEventHubReceiver</a>

---


### DataAzurermMonitorActionGroupItsmReceiverList <a name="DataAzurermMonitorActionGroupItsmReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupItsmReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupItsmReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupItsmReceiverOutputReference <a name="DataAzurermMonitorActionGroupItsmReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupItsmReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration">TicketConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver">DataAzurermMonitorActionGroupItsmReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TicketConfiguration`<sup>Required</sup> <a name="TicketConfiguration" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration"></a>

```csharp
public string TicketConfiguration { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupItsmReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver">DataAzurermMonitorActionGroupItsmReceiver</a>

---


### DataAzurermMonitorActionGroupLogicAppReceiverList <a name="DataAzurermMonitorActionGroupLogicAppReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupLogicAppReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupLogicAppReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupLogicAppReceiverOutputReference <a name="DataAzurermMonitorActionGroupLogicAppReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupLogicAppReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl">CallbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver">DataAzurermMonitorActionGroupLogicAppReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl"></a>

```csharp
public string CallbackUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema"></a>

```csharp
public IResolvable UseCommonAlertSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupLogicAppReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver">DataAzurermMonitorActionGroupLogicAppReceiver</a>

---


### DataAzurermMonitorActionGroupSmsReceiverList <a name="DataAzurermMonitorActionGroupSmsReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupSmsReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupSmsReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupSmsReceiverOutputReference <a name="DataAzurermMonitorActionGroupSmsReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupSmsReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver">DataAzurermMonitorActionGroupSmsReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupSmsReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver">DataAzurermMonitorActionGroupSmsReceiver</a>

---


### DataAzurermMonitorActionGroupTimeoutsOutputReference <a name="DataAzurermMonitorActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAzurermMonitorActionGroupVoiceReceiverList <a name="DataAzurermMonitorActionGroupVoiceReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupVoiceReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupVoiceReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupVoiceReceiverOutputReference <a name="DataAzurermMonitorActionGroupVoiceReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupVoiceReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver">DataAzurermMonitorActionGroupVoiceReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupVoiceReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver">DataAzurermMonitorActionGroupVoiceReceiver</a>

---


### DataAzurermMonitorActionGroupWebhookReceiverAadAuthList <a name="DataAzurermMonitorActionGroupWebhookReceiverAadAuthList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupWebhookReceiverAadAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.get"></a>

```csharp
private DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference <a name="DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri">IdentifierUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth">DataAzurermMonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierUri`<sup>Required</sup> <a name="IdentifierUri" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri"></a>

```csharp
public string IdentifierUri { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupWebhookReceiverAadAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth">DataAzurermMonitorActionGroupWebhookReceiverAadAuth</a>

---


### DataAzurermMonitorActionGroupWebhookReceiverList <a name="DataAzurermMonitorActionGroupWebhookReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupWebhookReceiverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.get"></a>

```csharp
private DataAzurermMonitorActionGroupWebhookReceiverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMonitorActionGroupWebhookReceiverOutputReference <a name="DataAzurermMonitorActionGroupWebhookReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMonitorActionGroupWebhookReceiverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.aadAuth">AadAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList">DataAzurermMonitorActionGroupWebhookReceiverAadAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver">DataAzurermMonitorActionGroupWebhookReceiver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AadAuth`<sup>Required</sup> <a name="AadAuth" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.aadAuth"></a>

```csharp
public DataAzurermMonitorActionGroupWebhookReceiverAadAuthList AadAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList">DataAzurermMonitorActionGroupWebhookReceiverAadAuthList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema"></a>

```csharp
public IResolvable UseCommonAlertSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMonitorActionGroupWebhookReceiver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver">DataAzurermMonitorActionGroupWebhookReceiver</a>

---



