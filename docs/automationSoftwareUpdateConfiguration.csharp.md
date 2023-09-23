# `azurerm_automation_software_update_configuration`

Refer to the Terraform Registory for docs: [`azurerm_automation_software_update_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration).

# `automationSoftwareUpdateConfiguration` Submodule <a name="`automationSoftwareUpdateConfiguration` Submodule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationSoftwareUpdateConfiguration <a name="AutomationSoftwareUpdateConfiguration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration azurerm_automation_software_update_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfiguration(Construct Scope, string Id, AutomationSoftwareUpdateConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig">AutomationSoftwareUpdateConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig">AutomationSoftwareUpdateConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putLinux">PutLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPostTask">PutPostTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPreTask">PutPreTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putWindows">PutWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetLinux">ResetLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetNonAzureComputerNames">ResetNonAzureComputerNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPostTask">ResetPostTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPreTask">ResetPreTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetVirtualMachineIds">ResetVirtualMachineIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetWindows">ResetWindows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLinux` <a name="PutLinux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putLinux"></a>

```csharp
private void PutLinux(AutomationSoftwareUpdateConfigurationLinux Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putLinux.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

---

##### `PutPostTask` <a name="PutPostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPostTask"></a>

```csharp
private void PutPostTask(AutomationSoftwareUpdateConfigurationPostTask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPostTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

---

##### `PutPreTask` <a name="PutPreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPreTask"></a>

```csharp
private void PutPreTask(AutomationSoftwareUpdateConfigurationPreTask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPreTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putSchedule"></a>

```csharp
private void PutSchedule(AutomationSoftwareUpdateConfigurationSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTarget"></a>

```csharp
private void PutTarget(AutomationSoftwareUpdateConfigurationTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(AutomationSoftwareUpdateConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a>

---

##### `PutWindows` <a name="PutWindows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putWindows"></a>

```csharp
private void PutWindows(AutomationSoftwareUpdateConfigurationWindows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putWindows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLinux` <a name="ResetLinux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetLinux"></a>

```csharp
private void ResetLinux()
```

##### `ResetNonAzureComputerNames` <a name="ResetNonAzureComputerNames" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetNonAzureComputerNames"></a>

```csharp
private void ResetNonAzureComputerNames()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetPostTask` <a name="ResetPostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPostTask"></a>

```csharp
private void ResetPostTask()
```

##### `ResetPreTask` <a name="ResetPreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPreTask"></a>

```csharp
private void ResetPreTask()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualMachineIds` <a name="ResetVirtualMachineIds" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetVirtualMachineIds"></a>

```csharp
private void ResetVirtualMachineIds()
```

##### `ResetWindows` <a name="ResetWindows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetWindows"></a>

```csharp
private void ResetWindows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationSoftwareUpdateConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationSoftwareUpdateConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationSoftwareUpdateConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorCode">ErrorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMeesage">ErrorMeesage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linux">Linux</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference">AutomationSoftwareUpdateConfigurationLinuxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTask">PostTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference">AutomationSoftwareUpdateConfigurationPostTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTask">PreTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference">AutomationSoftwareUpdateConfigurationPreTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference">AutomationSoftwareUpdateConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.target">Target</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference">AutomationSoftwareUpdateConfigurationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference">AutomationSoftwareUpdateConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windows">Windows</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference">AutomationSoftwareUpdateConfigurationWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountIdInput">AutomationAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linuxInput">LinuxInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNamesInput">NonAzureComputerNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTaskInput">PostTaskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTaskInput">PreTaskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIdsInput">VirtualMachineIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windowsInput">WindowsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountId">AutomationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNames">NonAzureComputerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIds">VirtualMachineIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorCode"></a>

```csharp
public string ErrorCode { get; }
```

- *Type:* string

---

##### `ErrorMeesage`<sup>Required</sup> <a name="ErrorMeesage" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMeesage"></a>

```csharp
public string ErrorMeesage { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Linux`<sup>Required</sup> <a name="Linux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linux"></a>

```csharp
public AutomationSoftwareUpdateConfigurationLinuxOutputReference Linux { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference">AutomationSoftwareUpdateConfigurationLinuxOutputReference</a>

---

##### `PostTask`<sup>Required</sup> <a name="PostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTask"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPostTaskOutputReference PostTask { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference">AutomationSoftwareUpdateConfigurationPostTaskOutputReference</a>

---

##### `PreTask`<sup>Required</sup> <a name="PreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTask"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPreTaskOutputReference PreTask { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference">AutomationSoftwareUpdateConfigurationPreTaskOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.schedule"></a>

```csharp
public AutomationSoftwareUpdateConfigurationScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference">AutomationSoftwareUpdateConfigurationScheduleOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.target"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference">AutomationSoftwareUpdateConfigurationTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeouts"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference">AutomationSoftwareUpdateConfigurationTimeoutsOutputReference</a>

---

##### `Windows`<sup>Required</sup> <a name="Windows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windows"></a>

```csharp
public AutomationSoftwareUpdateConfigurationWindowsOutputReference Windows { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference">AutomationSoftwareUpdateConfigurationWindowsOutputReference</a>

---

##### `AutomationAccountIdInput`<sup>Optional</sup> <a name="AutomationAccountIdInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountIdInput"></a>

```csharp
public string AutomationAccountIdInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinuxInput`<sup>Optional</sup> <a name="LinuxInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linuxInput"></a>

```csharp
public AutomationSoftwareUpdateConfigurationLinux LinuxInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonAzureComputerNamesInput`<sup>Optional</sup> <a name="NonAzureComputerNamesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNamesInput"></a>

```csharp
public string[] NonAzureComputerNamesInput { get; }
```

- *Type:* string[]

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `PostTaskInput`<sup>Optional</sup> <a name="PostTaskInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTaskInput"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPostTask PostTaskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

---

##### `PreTaskInput`<sup>Optional</sup> <a name="PreTaskInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTaskInput"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPreTask PreTaskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.scheduleInput"></a>

```csharp
public AutomationSoftwareUpdateConfigurationSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.targetInput"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineIdsInput`<sup>Optional</sup> <a name="VirtualMachineIdsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIdsInput"></a>

```csharp
public string[] VirtualMachineIdsInput { get; }
```

- *Type:* string[]

---

##### `WindowsInput`<sup>Optional</sup> <a name="WindowsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windowsInput"></a>

```csharp
public AutomationSoftwareUpdateConfigurationWindows WindowsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountId"></a>

```csharp
public string AutomationAccountId { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NonAzureComputerNames`<sup>Required</sup> <a name="NonAzureComputerNames" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNames"></a>

```csharp
public string[] NonAzureComputerNames { get; }
```

- *Type:* string[]

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `VirtualMachineIds`<sup>Required</sup> <a name="VirtualMachineIds" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIds"></a>

```csharp
public string[] VirtualMachineIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationSoftwareUpdateConfigurationConfig <a name="AutomationSoftwareUpdateConfigurationConfig" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutomationAccountId,
    string Name,
    AutomationSoftwareUpdateConfigurationSchedule Schedule,
    string Duration = null,
    string Id = null,
    AutomationSoftwareUpdateConfigurationLinux Linux = null,
    string[] NonAzureComputerNames = null,
    string OperatingSystem = null,
    AutomationSoftwareUpdateConfigurationPostTask PostTask = null,
    AutomationSoftwareUpdateConfigurationPreTask PreTask = null,
    AutomationSoftwareUpdateConfigurationTarget Target = null,
    AutomationSoftwareUpdateConfigurationTimeouts Timeouts = null,
    string[] VirtualMachineIds = null,
    AutomationSoftwareUpdateConfigurationWindows Windows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.automationAccountId">AutomationAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#automation_account_id AutomationSoftwareUpdateConfiguration#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#name AutomationSoftwareUpdateConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#duration AutomationSoftwareUpdateConfiguration#duration}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#id AutomationSoftwareUpdateConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.linux">Linux</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a></code> | linux block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.nonAzureComputerNames">NonAzureComputerNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#non_azure_computer_names AutomationSoftwareUpdateConfiguration#non_azure_computer_names}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#operating_system AutomationSoftwareUpdateConfiguration#operating_system}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.postTask">PostTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a></code> | post_task block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.preTask">PreTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a></code> | pre_task block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.virtualMachineIds">VirtualMachineIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#virtual_machine_ids AutomationSoftwareUpdateConfiguration#virtual_machine_ids}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.windows">Windows</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a></code> | windows block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.automationAccountId"></a>

```csharp
public string AutomationAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#automation_account_id AutomationSoftwareUpdateConfiguration#automation_account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#name AutomationSoftwareUpdateConfiguration#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.schedule"></a>

```csharp
public AutomationSoftwareUpdateConfigurationSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#schedule AutomationSoftwareUpdateConfiguration#schedule}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#duration AutomationSoftwareUpdateConfiguration#duration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#id AutomationSoftwareUpdateConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Linux`<sup>Optional</sup> <a name="Linux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.linux"></a>

```csharp
public AutomationSoftwareUpdateConfigurationLinux Linux { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#linux AutomationSoftwareUpdateConfiguration#linux}

---

##### `NonAzureComputerNames`<sup>Optional</sup> <a name="NonAzureComputerNames" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.nonAzureComputerNames"></a>

```csharp
public string[] NonAzureComputerNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#non_azure_computer_names AutomationSoftwareUpdateConfiguration#non_azure_computer_names}.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#operating_system AutomationSoftwareUpdateConfiguration#operating_system}.

---

##### `PostTask`<sup>Optional</sup> <a name="PostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.postTask"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPostTask PostTask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

post_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#post_task AutomationSoftwareUpdateConfiguration#post_task}

---

##### `PreTask`<sup>Optional</sup> <a name="PreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.preTask"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPreTask PreTask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

pre_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#pre_task AutomationSoftwareUpdateConfiguration#pre_task}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.target"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#target AutomationSoftwareUpdateConfiguration#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.timeouts"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#timeouts AutomationSoftwareUpdateConfiguration#timeouts}

---

##### `VirtualMachineIds`<sup>Optional</sup> <a name="VirtualMachineIds" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.virtualMachineIds"></a>

```csharp
public string[] VirtualMachineIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#virtual_machine_ids AutomationSoftwareUpdateConfiguration#virtual_machine_ids}.

---

##### `Windows`<sup>Optional</sup> <a name="Windows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.windows"></a>

```csharp
public AutomationSoftwareUpdateConfigurationWindows Windows { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#windows AutomationSoftwareUpdateConfiguration#windows}

---

### AutomationSoftwareUpdateConfigurationLinux <a name="AutomationSoftwareUpdateConfigurationLinux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationLinux {
    string ClassificationIncluded = null,
    string[] ClassificationsIncluded = null,
    string[] ExcludedPackages = null,
    string[] IncludedPackages = null,
    string Reboot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationIncluded">ClassificationIncluded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationsIncluded">ClassificationsIncluded</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.excludedPackages">ExcludedPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#excluded_packages AutomationSoftwareUpdateConfiguration#excluded_packages}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.includedPackages">IncludedPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#included_packages AutomationSoftwareUpdateConfiguration#included_packages}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.reboot">Reboot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}. |

---

##### `ClassificationIncluded`<sup>Optional</sup> <a name="ClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationIncluded"></a>

```csharp
public string ClassificationIncluded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}.

---

##### `ClassificationsIncluded`<sup>Optional</sup> <a name="ClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationsIncluded"></a>

```csharp
public string[] ClassificationsIncluded { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}.

---

##### `ExcludedPackages`<sup>Optional</sup> <a name="ExcludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.excludedPackages"></a>

```csharp
public string[] ExcludedPackages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#excluded_packages AutomationSoftwareUpdateConfiguration#excluded_packages}.

---

##### `IncludedPackages`<sup>Optional</sup> <a name="IncludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.includedPackages"></a>

```csharp
public string[] IncludedPackages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#included_packages AutomationSoftwareUpdateConfiguration#included_packages}.

---

##### `Reboot`<sup>Optional</sup> <a name="Reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.reboot"></a>

```csharp
public string Reboot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}.

---

### AutomationSoftwareUpdateConfigurationPostTask <a name="AutomationSoftwareUpdateConfigurationPostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationPostTask {
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}.

---

### AutomationSoftwareUpdateConfigurationPreTask <a name="AutomationSoftwareUpdateConfigurationPreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationPreTask {
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}.

---

### AutomationSoftwareUpdateConfigurationSchedule <a name="AutomationSoftwareUpdateConfigurationSchedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationSchedule {
    string Frequency,
    double[] AdvancedMonthDays = null,
    string[] AdvancedWeekDays = null,
    string Description = null,
    string ExpiryTime = null,
    double ExpiryTimeOffsetMinutes = null,
    double Interval = null,
    object IsEnabled = null,
    AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence MonthlyOccurrence = null,
    string NextRun = null,
    double NextRunOffsetMinutes = null,
    string StartTime = null,
    double StartTimeOffsetMinutes = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#frequency AutomationSoftwareUpdateConfiguration#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedMonthDays">AdvancedMonthDays</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#advanced_month_days AutomationSoftwareUpdateConfiguration#advanced_month_days}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedWeekDays">AdvancedWeekDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#advanced_week_days AutomationSoftwareUpdateConfiguration#advanced_week_days}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#description AutomationSoftwareUpdateConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTime">ExpiryTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#expiry_time AutomationSoftwareUpdateConfiguration#expiry_time}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTimeOffsetMinutes">ExpiryTimeOffsetMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#expiry_time_offset_minutes AutomationSoftwareUpdateConfiguration#expiry_time_offset_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#interval AutomationSoftwareUpdateConfiguration#interval}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#is_enabled AutomationSoftwareUpdateConfiguration#is_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.monthlyOccurrence">MonthlyOccurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a></code> | monthly_occurrence block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRun">NextRun</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#next_run AutomationSoftwareUpdateConfiguration#next_run}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRunOffsetMinutes">NextRunOffsetMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#next_run_offset_minutes AutomationSoftwareUpdateConfiguration#next_run_offset_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#start_time AutomationSoftwareUpdateConfiguration#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTimeOffsetMinutes">StartTimeOffsetMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#start_time_offset_minutes AutomationSoftwareUpdateConfiguration#start_time_offset_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#time_zone AutomationSoftwareUpdateConfiguration#time_zone}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#frequency AutomationSoftwareUpdateConfiguration#frequency}.

---

##### `AdvancedMonthDays`<sup>Optional</sup> <a name="AdvancedMonthDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedMonthDays"></a>

```csharp
public double[] AdvancedMonthDays { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#advanced_month_days AutomationSoftwareUpdateConfiguration#advanced_month_days}.

---

##### `AdvancedWeekDays`<sup>Optional</sup> <a name="AdvancedWeekDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedWeekDays"></a>

```csharp
public string[] AdvancedWeekDays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#advanced_week_days AutomationSoftwareUpdateConfiguration#advanced_week_days}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#description AutomationSoftwareUpdateConfiguration#description}.

---

##### `ExpiryTime`<sup>Optional</sup> <a name="ExpiryTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTime"></a>

```csharp
public string ExpiryTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#expiry_time AutomationSoftwareUpdateConfiguration#expiry_time}.

---

##### `ExpiryTimeOffsetMinutes`<sup>Optional</sup> <a name="ExpiryTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTimeOffsetMinutes"></a>

```csharp
public double ExpiryTimeOffsetMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#expiry_time_offset_minutes AutomationSoftwareUpdateConfiguration#expiry_time_offset_minutes}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#interval AutomationSoftwareUpdateConfiguration#interval}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#is_enabled AutomationSoftwareUpdateConfiguration#is_enabled}.

---

##### `MonthlyOccurrence`<sup>Optional</sup> <a name="MonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.monthlyOccurrence"></a>

```csharp
public AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence MonthlyOccurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

monthly_occurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#monthly_occurrence AutomationSoftwareUpdateConfiguration#monthly_occurrence}

---

##### `NextRun`<sup>Optional</sup> <a name="NextRun" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRun"></a>

```csharp
public string NextRun { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#next_run AutomationSoftwareUpdateConfiguration#next_run}.

---

##### `NextRunOffsetMinutes`<sup>Optional</sup> <a name="NextRunOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRunOffsetMinutes"></a>

```csharp
public double NextRunOffsetMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#next_run_offset_minutes AutomationSoftwareUpdateConfiguration#next_run_offset_minutes}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#start_time AutomationSoftwareUpdateConfiguration#start_time}.

---

##### `StartTimeOffsetMinutes`<sup>Optional</sup> <a name="StartTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTimeOffsetMinutes"></a>

```csharp
public double StartTimeOffsetMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#start_time_offset_minutes AutomationSoftwareUpdateConfiguration#start_time_offset_minutes}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#time_zone AutomationSoftwareUpdateConfiguration#time_zone}.

---

### AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence <a name="AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence {
    string Day,
    double Occurrence
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.day">Day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#day AutomationSoftwareUpdateConfiguration#day}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.occurrence">Occurrence</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#occurrence AutomationSoftwareUpdateConfiguration#occurrence}. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#day AutomationSoftwareUpdateConfiguration#day}.

---

##### `Occurrence`<sup>Required</sup> <a name="Occurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.occurrence"></a>

```csharp
public double Occurrence { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#occurrence AutomationSoftwareUpdateConfiguration#occurrence}.

---

### AutomationSoftwareUpdateConfigurationTarget <a name="AutomationSoftwareUpdateConfigurationTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTarget {
    object AzureQuery = null,
    object NonAzureQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.azureQuery">AzureQuery</a></code> | <code>object</code> | azure_query block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.nonAzureQuery">NonAzureQuery</a></code> | <code>object</code> | non_azure_query block. |

---

##### `AzureQuery`<sup>Optional</sup> <a name="AzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.azureQuery"></a>

```csharp
public object AzureQuery { get; set; }
```

- *Type:* object

azure_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#azure_query AutomationSoftwareUpdateConfiguration#azure_query}

---

##### `NonAzureQuery`<sup>Optional</sup> <a name="NonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.nonAzureQuery"></a>

```csharp
public object NonAzureQuery { get; set; }
```

- *Type:* object

non_azure_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#non_azure_query AutomationSoftwareUpdateConfiguration#non_azure_query}

---

### AutomationSoftwareUpdateConfigurationTargetAzureQuery <a name="AutomationSoftwareUpdateConfigurationTargetAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetAzureQuery {
    string[] Locations = null,
    string[] Scope = null,
    string TagFilter = null,
    object Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.locations">Locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#locations AutomationSoftwareUpdateConfiguration#locations}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.scope">Scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#scope AutomationSoftwareUpdateConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tagFilter">TagFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#tag_filter AutomationSoftwareUpdateConfiguration#tag_filter}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tags">Tags</a></code> | <code>object</code> | tags block. |

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#locations AutomationSoftwareUpdateConfiguration#locations}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.scope"></a>

```csharp
public string[] Scope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#scope AutomationSoftwareUpdateConfiguration#scope}.

---

##### `TagFilter`<sup>Optional</sup> <a name="TagFilter" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tagFilter"></a>

```csharp
public string TagFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#tag_filter AutomationSoftwareUpdateConfiguration#tag_filter}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#tags AutomationSoftwareUpdateConfiguration#tags}

---

### AutomationSoftwareUpdateConfigurationTargetAzureQueryTags <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryTags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetAzureQueryTags {
    string Tag,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#tag AutomationSoftwareUpdateConfiguration#tag}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#values AutomationSoftwareUpdateConfiguration#values}. |

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#tag AutomationSoftwareUpdateConfiguration#tag}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#values AutomationSoftwareUpdateConfiguration#values}.

---

### AutomationSoftwareUpdateConfigurationTargetNonAzureQuery <a name="AutomationSoftwareUpdateConfigurationTargetNonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetNonAzureQuery {
    string FunctionAlias = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.functionAlias">FunctionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#function_alias AutomationSoftwareUpdateConfiguration#function_alias}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#workspace_id AutomationSoftwareUpdateConfiguration#workspace_id}. |

---

##### `FunctionAlias`<sup>Optional</sup> <a name="FunctionAlias" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.functionAlias"></a>

```csharp
public string FunctionAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#function_alias AutomationSoftwareUpdateConfiguration#function_alias}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#workspace_id AutomationSoftwareUpdateConfiguration#workspace_id}.

---

### AutomationSoftwareUpdateConfigurationTimeouts <a name="AutomationSoftwareUpdateConfigurationTimeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#create AutomationSoftwareUpdateConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#delete AutomationSoftwareUpdateConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#read AutomationSoftwareUpdateConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#update AutomationSoftwareUpdateConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#create AutomationSoftwareUpdateConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#delete AutomationSoftwareUpdateConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#read AutomationSoftwareUpdateConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#update AutomationSoftwareUpdateConfiguration#update}.

---

### AutomationSoftwareUpdateConfigurationWindows <a name="AutomationSoftwareUpdateConfigurationWindows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationWindows {
    string ClassificationIncluded = null,
    string[] ClassificationsIncluded = null,
    string[] ExcludedKnowledgeBaseNumbers = null,
    string[] IncludedKnowledgeBaseNumbers = null,
    string Reboot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationIncluded">ClassificationIncluded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationsIncluded">ClassificationsIncluded</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.excludedKnowledgeBaseNumbers">ExcludedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#excluded_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#excluded_knowledge_base_numbers}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.includedKnowledgeBaseNumbers">IncludedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#included_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#included_knowledge_base_numbers}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.reboot">Reboot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}. |

---

##### `ClassificationIncluded`<sup>Optional</sup> <a name="ClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationIncluded"></a>

```csharp
public string ClassificationIncluded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}.

---

##### `ClassificationsIncluded`<sup>Optional</sup> <a name="ClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationsIncluded"></a>

```csharp
public string[] ClassificationsIncluded { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}.

---

##### `ExcludedKnowledgeBaseNumbers`<sup>Optional</sup> <a name="ExcludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.excludedKnowledgeBaseNumbers"></a>

```csharp
public string[] ExcludedKnowledgeBaseNumbers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#excluded_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#excluded_knowledge_base_numbers}.

---

##### `IncludedKnowledgeBaseNumbers`<sup>Optional</sup> <a name="IncludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.includedKnowledgeBaseNumbers"></a>

```csharp
public string[] IncludedKnowledgeBaseNumbers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#included_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#included_knowledge_base_numbers}.

---

##### `Reboot`<sup>Optional</sup> <a name="Reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.reboot"></a>

```csharp
public string Reboot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationSoftwareUpdateConfigurationLinuxOutputReference <a name="AutomationSoftwareUpdateConfigurationLinuxOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationLinuxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationIncluded">ResetClassificationIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationsIncluded">ResetClassificationsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetExcludedPackages">ResetExcludedPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetIncludedPackages">ResetIncludedPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetReboot">ResetReboot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassificationIncluded` <a name="ResetClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationIncluded"></a>

```csharp
private void ResetClassificationIncluded()
```

##### `ResetClassificationsIncluded` <a name="ResetClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationsIncluded"></a>

```csharp
private void ResetClassificationsIncluded()
```

##### `ResetExcludedPackages` <a name="ResetExcludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetExcludedPackages"></a>

```csharp
private void ResetExcludedPackages()
```

##### `ResetIncludedPackages` <a name="ResetIncludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetIncludedPackages"></a>

```csharp
private void ResetIncludedPackages()
```

##### `ResetReboot` <a name="ResetReboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetReboot"></a>

```csharp
private void ResetReboot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncludedInput">ClassificationIncludedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncludedInput">ClassificationsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackagesInput">ExcludedPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackagesInput">IncludedPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.rebootInput">RebootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncluded">ClassificationIncluded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncluded">ClassificationsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackages">ExcludedPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackages">IncludedPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.reboot">Reboot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationIncludedInput`<sup>Optional</sup> <a name="ClassificationIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncludedInput"></a>

```csharp
public string ClassificationIncludedInput { get; }
```

- *Type:* string

---

##### `ClassificationsIncludedInput`<sup>Optional</sup> <a name="ClassificationsIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncludedInput"></a>

```csharp
public string[] ClassificationsIncludedInput { get; }
```

- *Type:* string[]

---

##### `ExcludedPackagesInput`<sup>Optional</sup> <a name="ExcludedPackagesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackagesInput"></a>

```csharp
public string[] ExcludedPackagesInput { get; }
```

- *Type:* string[]

---

##### `IncludedPackagesInput`<sup>Optional</sup> <a name="IncludedPackagesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackagesInput"></a>

```csharp
public string[] IncludedPackagesInput { get; }
```

- *Type:* string[]

---

##### `RebootInput`<sup>Optional</sup> <a name="RebootInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.rebootInput"></a>

```csharp
public string RebootInput { get; }
```

- *Type:* string

---

##### `ClassificationIncluded`<sup>Required</sup> <a name="ClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncluded"></a>

```csharp
public string ClassificationIncluded { get; }
```

- *Type:* string

---

##### `ClassificationsIncluded`<sup>Required</sup> <a name="ClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncluded"></a>

```csharp
public string[] ClassificationsIncluded { get; }
```

- *Type:* string[]

---

##### `ExcludedPackages`<sup>Required</sup> <a name="ExcludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackages"></a>

```csharp
public string[] ExcludedPackages { get; }
```

- *Type:* string[]

---

##### `IncludedPackages`<sup>Required</sup> <a name="IncludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackages"></a>

```csharp
public string[] IncludedPackages { get; }
```

- *Type:* string[]

---

##### `Reboot`<sup>Required</sup> <a name="Reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.reboot"></a>

```csharp
public string Reboot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.internalValue"></a>

```csharp
public AutomationSoftwareUpdateConfigurationLinux InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

---


### AutomationSoftwareUpdateConfigurationPostTaskOutputReference <a name="AutomationSoftwareUpdateConfigurationPostTaskOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationPostTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.internalValue"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPostTask InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

---


### AutomationSoftwareUpdateConfigurationPreTaskOutputReference <a name="AutomationSoftwareUpdateConfigurationPreTaskOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationPreTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.internalValue"></a>

```csharp
public AutomationSoftwareUpdateConfigurationPreTask InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

---


### AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference <a name="AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrenceInput">OccurrenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrence">Occurrence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `OccurrenceInput`<sup>Optional</sup> <a name="OccurrenceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrenceInput"></a>

```csharp
public double OccurrenceInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `Occurrence`<sup>Required</sup> <a name="Occurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrence"></a>

```csharp
public double Occurrence { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.internalValue"></a>

```csharp
public AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

---


### AutomationSoftwareUpdateConfigurationScheduleOutputReference <a name="AutomationSoftwareUpdateConfigurationScheduleOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.putMonthlyOccurrence">PutMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedMonthDays">ResetAdvancedMonthDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedWeekDays">ResetAdvancedWeekDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTime">ResetExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTimeOffsetMinutes">ResetExpiryTimeOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetMonthlyOccurrence">ResetMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRun">ResetNextRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRunOffsetMinutes">ResetNextRunOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTimeOffsetMinutes">ResetStartTimeOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthlyOccurrence` <a name="PutMonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.putMonthlyOccurrence"></a>

```csharp
private void PutMonthlyOccurrence(AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.putMonthlyOccurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

---

##### `ResetAdvancedMonthDays` <a name="ResetAdvancedMonthDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedMonthDays"></a>

```csharp
private void ResetAdvancedMonthDays()
```

##### `ResetAdvancedWeekDays` <a name="ResetAdvancedWeekDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedWeekDays"></a>

```csharp
private void ResetAdvancedWeekDays()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpiryTime` <a name="ResetExpiryTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTime"></a>

```csharp
private void ResetExpiryTime()
```

##### `ResetExpiryTimeOffsetMinutes` <a name="ResetExpiryTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTimeOffsetMinutes"></a>

```csharp
private void ResetExpiryTimeOffsetMinutes()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetMonthlyOccurrence` <a name="ResetMonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetMonthlyOccurrence"></a>

```csharp
private void ResetMonthlyOccurrence()
```

##### `ResetNextRun` <a name="ResetNextRun" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRun"></a>

```csharp
private void ResetNextRun()
```

##### `ResetNextRunOffsetMinutes` <a name="ResetNextRunOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRunOffsetMinutes"></a>

```csharp
private void ResetNextRunOffsetMinutes()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetStartTimeOffsetMinutes` <a name="ResetStartTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTimeOffsetMinutes"></a>

```csharp
private void ResetStartTimeOffsetMinutes()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrence">MonthlyOccurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDaysInput">AdvancedMonthDaysInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDaysInput">AdvancedWeekDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeInput">ExpiryTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutesInput">ExpiryTimeOffsetMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrenceInput">MonthlyOccurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunInput">NextRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutesInput">NextRunOffsetMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutesInput">StartTimeOffsetMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDays">AdvancedMonthDays</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDays">AdvancedWeekDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTime">ExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutes">ExpiryTimeOffsetMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRun">NextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutes">NextRunOffsetMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutes">StartTimeOffsetMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `MonthlyOccurrence`<sup>Required</sup> <a name="MonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrence"></a>

```csharp
public AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference MonthlyOccurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference</a>

---

##### `AdvancedMonthDaysInput`<sup>Optional</sup> <a name="AdvancedMonthDaysInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDaysInput"></a>

```csharp
public double[] AdvancedMonthDaysInput { get; }
```

- *Type:* double[]

---

##### `AdvancedWeekDaysInput`<sup>Optional</sup> <a name="AdvancedWeekDaysInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDaysInput"></a>

```csharp
public string[] AdvancedWeekDaysInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpiryTimeInput`<sup>Optional</sup> <a name="ExpiryTimeInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeInput"></a>

```csharp
public string ExpiryTimeInput { get; }
```

- *Type:* string

---

##### `ExpiryTimeOffsetMinutesInput`<sup>Optional</sup> <a name="ExpiryTimeOffsetMinutesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutesInput"></a>

```csharp
public double ExpiryTimeOffsetMinutesInput { get; }
```

- *Type:* double

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `MonthlyOccurrenceInput`<sup>Optional</sup> <a name="MonthlyOccurrenceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrenceInput"></a>

```csharp
public AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence MonthlyOccurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

---

##### `NextRunInput`<sup>Optional</sup> <a name="NextRunInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunInput"></a>

```csharp
public string NextRunInput { get; }
```

- *Type:* string

---

##### `NextRunOffsetMinutesInput`<sup>Optional</sup> <a name="NextRunOffsetMinutesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutesInput"></a>

```csharp
public double NextRunOffsetMinutesInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetMinutesInput`<sup>Optional</sup> <a name="StartTimeOffsetMinutesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutesInput"></a>

```csharp
public double StartTimeOffsetMinutesInput { get; }
```

- *Type:* double

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AdvancedMonthDays`<sup>Required</sup> <a name="AdvancedMonthDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDays"></a>

```csharp
public double[] AdvancedMonthDays { get; }
```

- *Type:* double[]

---

##### `AdvancedWeekDays`<sup>Required</sup> <a name="AdvancedWeekDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDays"></a>

```csharp
public string[] AdvancedWeekDays { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpiryTime`<sup>Required</sup> <a name="ExpiryTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTime"></a>

```csharp
public string ExpiryTime { get; }
```

- *Type:* string

---

##### `ExpiryTimeOffsetMinutes`<sup>Required</sup> <a name="ExpiryTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutes"></a>

```csharp
public double ExpiryTimeOffsetMinutes { get; }
```

- *Type:* double

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `NextRun`<sup>Required</sup> <a name="NextRun" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRun"></a>

```csharp
public string NextRun { get; }
```

- *Type:* string

---

##### `NextRunOffsetMinutes`<sup>Required</sup> <a name="NextRunOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutes"></a>

```csharp
public double NextRunOffsetMinutes { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `StartTimeOffsetMinutes`<sup>Required</sup> <a name="StartTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutes"></a>

```csharp
public double StartTimeOffsetMinutes { get; }
```

- *Type:* double

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.internalValue"></a>

```csharp
public AutomationSoftwareUpdateConfigurationSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryList <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryList" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetAzureQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.get"></a>

```csharp
private AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTagFilter">ResetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTagFilter` <a name="ResetTagFilter" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTagFilter"></a>

```csharp
private void ResetTagFilter()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList">AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilterInput">TagFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilter">TagFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tags"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList">AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList</a>

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scopeInput"></a>

```csharp
public string[] ScopeInput { get; }
```

- *Type:* string[]

---

##### `TagFilterInput`<sup>Optional</sup> <a name="TagFilterInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilterInput"></a>

```csharp
public string TagFilterInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilter"></a>

```csharp
public string TagFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.get"></a>

```csharp
private AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList <a name="AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.get"></a>

```csharp
private AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetFunctionAlias">ResetFunctionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionAlias` <a name="ResetFunctionAlias" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetFunctionAlias"></a>

```csharp
private void ResetFunctionAlias()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAliasInput">FunctionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAlias">FunctionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionAliasInput`<sup>Optional</sup> <a name="FunctionAliasInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAliasInput"></a>

```csharp
public string FunctionAliasInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `FunctionAlias`<sup>Required</sup> <a name="FunctionAlias" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAlias"></a>

```csharp
public string FunctionAlias { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationSoftwareUpdateConfigurationTargetOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putAzureQuery">PutAzureQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putNonAzureQuery">PutNonAzureQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetAzureQuery">ResetAzureQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetNonAzureQuery">ResetNonAzureQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureQuery` <a name="PutAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putAzureQuery"></a>

```csharp
private void PutAzureQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putAzureQuery.parameter.value"></a>

- *Type:* object

---

##### `PutNonAzureQuery` <a name="PutNonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putNonAzureQuery"></a>

```csharp
private void PutNonAzureQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putNonAzureQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetAzureQuery` <a name="ResetAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetAzureQuery"></a>

```csharp
private void ResetAzureQuery()
```

##### `ResetNonAzureQuery` <a name="ResetNonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetNonAzureQuery"></a>

```csharp
private void ResetNonAzureQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQuery">AzureQuery</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList">AutomationSoftwareUpdateConfigurationTargetAzureQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQuery">NonAzureQuery</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList">AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQueryInput">AzureQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQueryInput">NonAzureQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureQuery`<sup>Required</sup> <a name="AzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQuery"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTargetAzureQueryList AzureQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList">AutomationSoftwareUpdateConfigurationTargetAzureQueryList</a>

---

##### `NonAzureQuery`<sup>Required</sup> <a name="NonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQuery"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList NonAzureQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList">AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList</a>

---

##### `AzureQueryInput`<sup>Optional</sup> <a name="AzureQueryInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQueryInput"></a>

```csharp
public object AzureQueryInput { get; }
```

- *Type:* object

---

##### `NonAzureQueryInput`<sup>Optional</sup> <a name="NonAzureQueryInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQueryInput"></a>

```csharp
public object NonAzureQueryInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.internalValue"></a>

```csharp
public AutomationSoftwareUpdateConfigurationTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

---


### AutomationSoftwareUpdateConfigurationTimeoutsOutputReference <a name="AutomationSoftwareUpdateConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutomationSoftwareUpdateConfigurationWindowsOutputReference <a name="AutomationSoftwareUpdateConfigurationWindowsOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationSoftwareUpdateConfigurationWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationIncluded">ResetClassificationIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationsIncluded">ResetClassificationsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetExcludedKnowledgeBaseNumbers">ResetExcludedKnowledgeBaseNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetIncludedKnowledgeBaseNumbers">ResetIncludedKnowledgeBaseNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetReboot">ResetReboot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassificationIncluded` <a name="ResetClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationIncluded"></a>

```csharp
private void ResetClassificationIncluded()
```

##### `ResetClassificationsIncluded` <a name="ResetClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationsIncluded"></a>

```csharp
private void ResetClassificationsIncluded()
```

##### `ResetExcludedKnowledgeBaseNumbers` <a name="ResetExcludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetExcludedKnowledgeBaseNumbers"></a>

```csharp
private void ResetExcludedKnowledgeBaseNumbers()
```

##### `ResetIncludedKnowledgeBaseNumbers` <a name="ResetIncludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetIncludedKnowledgeBaseNumbers"></a>

```csharp
private void ResetIncludedKnowledgeBaseNumbers()
```

##### `ResetReboot` <a name="ResetReboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetReboot"></a>

```csharp
private void ResetReboot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncludedInput">ClassificationIncludedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncludedInput">ClassificationsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbersInput">ExcludedKnowledgeBaseNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbersInput">IncludedKnowledgeBaseNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.rebootInput">RebootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncluded">ClassificationIncluded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncluded">ClassificationsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbers">ExcludedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbers">IncludedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.reboot">Reboot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationIncludedInput`<sup>Optional</sup> <a name="ClassificationIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncludedInput"></a>

```csharp
public string ClassificationIncludedInput { get; }
```

- *Type:* string

---

##### `ClassificationsIncludedInput`<sup>Optional</sup> <a name="ClassificationsIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncludedInput"></a>

```csharp
public string[] ClassificationsIncludedInput { get; }
```

- *Type:* string[]

---

##### `ExcludedKnowledgeBaseNumbersInput`<sup>Optional</sup> <a name="ExcludedKnowledgeBaseNumbersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbersInput"></a>

```csharp
public string[] ExcludedKnowledgeBaseNumbersInput { get; }
```

- *Type:* string[]

---

##### `IncludedKnowledgeBaseNumbersInput`<sup>Optional</sup> <a name="IncludedKnowledgeBaseNumbersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbersInput"></a>

```csharp
public string[] IncludedKnowledgeBaseNumbersInput { get; }
```

- *Type:* string[]

---

##### `RebootInput`<sup>Optional</sup> <a name="RebootInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.rebootInput"></a>

```csharp
public string RebootInput { get; }
```

- *Type:* string

---

##### `ClassificationIncluded`<sup>Required</sup> <a name="ClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncluded"></a>

```csharp
public string ClassificationIncluded { get; }
```

- *Type:* string

---

##### `ClassificationsIncluded`<sup>Required</sup> <a name="ClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncluded"></a>

```csharp
public string[] ClassificationsIncluded { get; }
```

- *Type:* string[]

---

##### `ExcludedKnowledgeBaseNumbers`<sup>Required</sup> <a name="ExcludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbers"></a>

```csharp
public string[] ExcludedKnowledgeBaseNumbers { get; }
```

- *Type:* string[]

---

##### `IncludedKnowledgeBaseNumbers`<sup>Required</sup> <a name="IncludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbers"></a>

```csharp
public string[] IncludedKnowledgeBaseNumbers { get; }
```

- *Type:* string[]

---

##### `Reboot`<sup>Required</sup> <a name="Reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.reboot"></a>

```csharp
public string Reboot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.internalValue"></a>

```csharp
public AutomationSoftwareUpdateConfigurationWindows InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

---



