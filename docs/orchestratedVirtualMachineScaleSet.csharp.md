# `orchestratedVirtualMachineScaleSet` Submodule <a name="`orchestratedVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrchestratedVirtualMachineScaleSet <a name="OrchestratedVirtualMachineScaleSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSet(Construct Scope, string Id, OrchestratedVirtualMachineScaleSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig">OrchestratedVirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig">OrchestratedVirtualMachineScaleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putAdditionalCapabilities">PutAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putAutomaticInstanceRepair">PutAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putBootDiagnostics">PutBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putDataDisk">PutDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putOsProfile">PutOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putPriorityMix">PutPriorityMix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putSourceImageReference">PutSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putTerminationNotification">PutTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetAdditionalCapabilities">ResetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetAutomaticInstanceRepair">ResetAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetBootDiagnostics">ResetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetCapacityReservationGroupId">ResetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetDataDisk">ResetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetExtensionOperationsEnabled">ResetExtensionOperationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetExtensionsTimeBudget">ResetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetMaxBidPrice">ResetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetOsDisk">ResetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetOsProfile">ResetOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetPriorityMix">ResetPriorityMix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSinglePlacementGroup">ResetSinglePlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSourceImageId">ResetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSourceImageReference">ResetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetTerminationNotification">ResetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetUserDataBase64">ResetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetZoneBalance">ResetZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalCapabilities` <a name="PutAdditionalCapabilities" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putAdditionalCapabilities"></a>

```csharp
private void PutAdditionalCapabilities(OrchestratedVirtualMachineScaleSetAdditionalCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities">OrchestratedVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `PutAutomaticInstanceRepair` <a name="PutAutomaticInstanceRepair" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putAutomaticInstanceRepair"></a>

```csharp
private void PutAutomaticInstanceRepair(OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putBootDiagnostics"></a>

```csharp
private void PutBootDiagnostics(OrchestratedVirtualMachineScaleSetBootDiagnostics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics">OrchestratedVirtualMachineScaleSetBootDiagnostics</a>

---

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putDataDisk"></a>

```csharp
private void PutDataDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putDataDisk.parameter.value"></a>

- *Type:* object

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putExtension"></a>

```csharp
private void PutExtension(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putExtension.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putIdentity"></a>

```csharp
private void PutIdentity(OrchestratedVirtualMachineScaleSetIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity">OrchestratedVirtualMachineScaleSetIdentity</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putOsDisk"></a>

```csharp
private void PutOsDisk(OrchestratedVirtualMachineScaleSetOsDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk">OrchestratedVirtualMachineScaleSetOsDisk</a>

---

##### `PutOsProfile` <a name="PutOsProfile" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putOsProfile"></a>

```csharp
private void PutOsProfile(OrchestratedVirtualMachineScaleSetOsProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putOsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile">OrchestratedVirtualMachineScaleSetOsProfile</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putPlan"></a>

```csharp
private void PutPlan(OrchestratedVirtualMachineScaleSetPlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan">OrchestratedVirtualMachineScaleSetPlan</a>

---

##### `PutPriorityMix` <a name="PutPriorityMix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putPriorityMix"></a>

```csharp
private void PutPriorityMix(OrchestratedVirtualMachineScaleSetPriorityMix Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putPriorityMix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix">OrchestratedVirtualMachineScaleSetPriorityMix</a>

---

##### `PutSourceImageReference` <a name="PutSourceImageReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putSourceImageReference"></a>

```csharp
private void PutSourceImageReference(OrchestratedVirtualMachineScaleSetSourceImageReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference">OrchestratedVirtualMachineScaleSetSourceImageReference</a>

---

##### `PutTerminationNotification` <a name="PutTerminationNotification" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putTerminationNotification"></a>

```csharp
private void PutTerminationNotification(OrchestratedVirtualMachineScaleSetTerminationNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification">OrchestratedVirtualMachineScaleSetTerminationNotification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putTimeouts"></a>

```csharp
private void PutTimeouts(OrchestratedVirtualMachineScaleSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts">OrchestratedVirtualMachineScaleSetTimeouts</a>

---

##### `ResetAdditionalCapabilities` <a name="ResetAdditionalCapabilities" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetAdditionalCapabilities"></a>

```csharp
private void ResetAdditionalCapabilities()
```

##### `ResetAutomaticInstanceRepair` <a name="ResetAutomaticInstanceRepair" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetAutomaticInstanceRepair"></a>

```csharp
private void ResetAutomaticInstanceRepair()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetBootDiagnostics"></a>

```csharp
private void ResetBootDiagnostics()
```

##### `ResetCapacityReservationGroupId` <a name="ResetCapacityReservationGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetCapacityReservationGroupId"></a>

```csharp
private void ResetCapacityReservationGroupId()
```

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetDataDisk"></a>

```csharp
private void ResetDataDisk()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetEvictionPolicy"></a>

```csharp
private void ResetEvictionPolicy()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetExtensionOperationsEnabled` <a name="ResetExtensionOperationsEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetExtensionOperationsEnabled"></a>

```csharp
private void ResetExtensionOperationsEnabled()
```

##### `ResetExtensionsTimeBudget` <a name="ResetExtensionsTimeBudget" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetExtensionsTimeBudget"></a>

```csharp
private void ResetExtensionsTimeBudget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetMaxBidPrice` <a name="ResetMaxBidPrice" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetMaxBidPrice"></a>

```csharp
private void ResetMaxBidPrice()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetOsDisk` <a name="ResetOsDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetOsDisk"></a>

```csharp
private void ResetOsDisk()
```

##### `ResetOsProfile` <a name="ResetOsProfile" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetOsProfile"></a>

```csharp
private void ResetOsProfile()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetPriorityMix` <a name="ResetPriorityMix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetPriorityMix"></a>

```csharp
private void ResetPriorityMix()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetProximityPlacementGroupId"></a>

```csharp
private void ResetProximityPlacementGroupId()
```

##### `ResetSinglePlacementGroup` <a name="ResetSinglePlacementGroup" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSinglePlacementGroup"></a>

```csharp
private void ResetSinglePlacementGroup()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetSourceImageId` <a name="ResetSourceImageId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSourceImageId"></a>

```csharp
private void ResetSourceImageId()
```

##### `ResetSourceImageReference` <a name="ResetSourceImageReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetSourceImageReference"></a>

```csharp
private void ResetSourceImageReference()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminationNotification` <a name="ResetTerminationNotification" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetTerminationNotification"></a>

```csharp
private void ResetTerminationNotification()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserDataBase64` <a name="ResetUserDataBase64" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetUserDataBase64"></a>

```csharp
private void ResetUserDataBase64()
```

##### `ResetZoneBalance` <a name="ResetZoneBalance" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetZoneBalance"></a>

```csharp
private void ResetZoneBalance()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrchestratedVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrchestratedVirtualMachineScaleSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrchestratedVirtualMachineScaleSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrchestratedVirtualMachineScaleSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrchestratedVirtualMachineScaleSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrchestratedVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrchestratedVirtualMachineScaleSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrchestratedVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrchestratedVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.automaticInstanceRepair">AutomaticInstanceRepair</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference">OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList">OrchestratedVirtualMachineScaleSetDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList">OrchestratedVirtualMachineScaleSetExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference">OrchestratedVirtualMachineScaleSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList">OrchestratedVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference">OrchestratedVirtualMachineScaleSetOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference">OrchestratedVirtualMachineScaleSetOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference">OrchestratedVirtualMachineScaleSetPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priorityMix">PriorityMix</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference">OrchestratedVirtualMachineScaleSetPriorityMixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference">OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference">OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference">OrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.additionalCapabilitiesInput">AdditionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities">OrchestratedVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.automaticInstanceRepairInput">AutomaticInstanceRepairInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics">OrchestratedVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.capacityReservationGroupIdInput">CapacityReservationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.dataDiskInput">DataDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionInput">ExtensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionOperationsEnabledInput">ExtensionOperationsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionsTimeBudgetInput">ExtensionsTimeBudgetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity">OrchestratedVirtualMachineScaleSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.instancesInput">InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.maxBidPriceInput">MaxBidPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk">OrchestratedVirtualMachineScaleSetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osProfileInput">OsProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile">OrchestratedVirtualMachineScaleSetOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan">OrchestratedVirtualMachineScaleSetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.platformFaultDomainCountInput">PlatformFaultDomainCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priorityMixInput">PriorityMixInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix">OrchestratedVirtualMachineScaleSetPriorityMix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.singlePlacementGroupInput">SinglePlacementGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageIdInput">SourceImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageReferenceInput">SourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference">OrchestratedVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terminationNotificationInput">TerminationNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification">OrchestratedVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.userDataBase64Input">UserDataBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zoneBalanceInput">ZoneBalanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionOperationsEnabled">ExtensionOperationsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.instances">Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.maxBidPrice">MaxBidPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.platformFaultDomainCount">PlatformFaultDomainCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageId">SourceImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.userDataBase64">UserDataBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zoneBalance">ZoneBalance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalCapabilities`<sup>Required</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.additionalCapabilities"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference AdditionalCapabilities { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a>

---

##### `AutomaticInstanceRepair`<sup>Required</sup> <a name="AutomaticInstanceRepair" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.automaticInstanceRepair"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference AutomaticInstanceRepair { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a>

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.bootDiagnostics"></a>

```csharp
public OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference BootDiagnostics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference">OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference</a>

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.dataDisk"></a>

```csharp
public OrchestratedVirtualMachineScaleSetDataDiskList DataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList">OrchestratedVirtualMachineScaleSetDataDiskList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extension"></a>

```csharp
public OrchestratedVirtualMachineScaleSetExtensionList Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList">OrchestratedVirtualMachineScaleSetExtensionList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.identity"></a>

```csharp
public OrchestratedVirtualMachineScaleSetIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference">OrchestratedVirtualMachineScaleSetIdentityOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.networkInterface"></a>

```csharp
public OrchestratedVirtualMachineScaleSetNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList">OrchestratedVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osDisk"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDiskOutputReference OsDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference">OrchestratedVirtualMachineScaleSetOsDiskOutputReference</a>

---

##### `OsProfile`<sup>Required</sup> <a name="OsProfile" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osProfile"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileOutputReference OsProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference">OrchestratedVirtualMachineScaleSetOsProfileOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.plan"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPlanOutputReference Plan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference">OrchestratedVirtualMachineScaleSetPlanOutputReference</a>

---

##### `PriorityMix`<sup>Required</sup> <a name="PriorityMix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priorityMix"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPriorityMixOutputReference PriorityMix { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference">OrchestratedVirtualMachineScaleSetPriorityMixOutputReference</a>

---

##### `SourceImageReference`<sup>Required</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageReference"></a>

```csharp
public OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference SourceImageReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference">OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference</a>

---

##### `TerminationNotification`<sup>Required</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terminationNotification"></a>

```csharp
public OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference TerminationNotification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference">OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.timeouts"></a>

```csharp
public OrchestratedVirtualMachineScaleSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference">OrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `AdditionalCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalCapabilitiesInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.additionalCapabilitiesInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAdditionalCapabilities AdditionalCapabilitiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities">OrchestratedVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `AutomaticInstanceRepairInput`<sup>Optional</sup> <a name="AutomaticInstanceRepairInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.automaticInstanceRepairInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair AutomaticInstanceRepairInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.bootDiagnosticsInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetBootDiagnostics BootDiagnosticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics">OrchestratedVirtualMachineScaleSetBootDiagnostics</a>

---

##### `CapacityReservationGroupIdInput`<sup>Optional</sup> <a name="CapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.capacityReservationGroupIdInput"></a>

```csharp
public string CapacityReservationGroupIdInput { get; }
```

- *Type:* string

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.dataDiskInput"></a>

```csharp
public object DataDiskInput { get; }
```

- *Type:* object

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.encryptionAtHostEnabledInput"></a>

```csharp
public object EncryptionAtHostEnabledInput { get; }
```

- *Type:* object

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.evictionPolicyInput"></a>

```csharp
public string EvictionPolicyInput { get; }
```

- *Type:* string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionInput"></a>

```csharp
public object ExtensionInput { get; }
```

- *Type:* object

---

##### `ExtensionOperationsEnabledInput`<sup>Optional</sup> <a name="ExtensionOperationsEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionOperationsEnabledInput"></a>

```csharp
public object ExtensionOperationsEnabledInput { get; }
```

- *Type:* object

---

##### `ExtensionsTimeBudgetInput`<sup>Optional</sup> <a name="ExtensionsTimeBudgetInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionsTimeBudgetInput"></a>

```csharp
public string ExtensionsTimeBudgetInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.identityInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity">OrchestratedVirtualMachineScaleSetIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.instancesInput"></a>

```csharp
public double InstancesInput { get; }
```

- *Type:* double

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxBidPriceInput`<sup>Optional</sup> <a name="MaxBidPriceInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.maxBidPriceInput"></a>

```csharp
public double MaxBidPriceInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osDiskInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDisk OsDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk">OrchestratedVirtualMachineScaleSetOsDisk</a>

---

##### `OsProfileInput`<sup>Optional</sup> <a name="OsProfileInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.osProfileInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfile OsProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile">OrchestratedVirtualMachineScaleSetOsProfile</a>

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.planInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPlan PlanInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan">OrchestratedVirtualMachineScaleSetPlan</a>

---

##### `PlatformFaultDomainCountInput`<sup>Optional</sup> <a name="PlatformFaultDomainCountInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.platformFaultDomainCountInput"></a>

```csharp
public double PlatformFaultDomainCountInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `PriorityMixInput`<sup>Optional</sup> <a name="PriorityMixInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priorityMixInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPriorityMix PriorityMixInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix">OrchestratedVirtualMachineScaleSetPriorityMix</a>

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.proximityPlacementGroupIdInput"></a>

```csharp
public string ProximityPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SinglePlacementGroupInput`<sup>Optional</sup> <a name="SinglePlacementGroupInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.singlePlacementGroupInput"></a>

```csharp
public object SinglePlacementGroupInput { get; }
```

- *Type:* object

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `SourceImageIdInput`<sup>Optional</sup> <a name="SourceImageIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageIdInput"></a>

```csharp
public string SourceImageIdInput { get; }
```

- *Type:* string

---

##### `SourceImageReferenceInput`<sup>Optional</sup> <a name="SourceImageReferenceInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageReferenceInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetSourceImageReference SourceImageReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference">OrchestratedVirtualMachineScaleSetSourceImageReference</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TerminationNotificationInput`<sup>Optional</sup> <a name="TerminationNotificationInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.terminationNotificationInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetTerminationNotification TerminationNotificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification">OrchestratedVirtualMachineScaleSetTerminationNotification</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserDataBase64Input`<sup>Optional</sup> <a name="UserDataBase64Input" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.userDataBase64Input"></a>

```csharp
public string UserDataBase64Input { get; }
```

- *Type:* string

---

##### `ZoneBalanceInput`<sup>Optional</sup> <a name="ZoneBalanceInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zoneBalanceInput"></a>

```csharp
public object ZoneBalanceInput { get; }
```

- *Type:* object

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `CapacityReservationGroupId`<sup>Required</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; }
```

- *Type:* object

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; }
```

- *Type:* string

---

##### `ExtensionOperationsEnabled`<sup>Required</sup> <a name="ExtensionOperationsEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionOperationsEnabled"></a>

```csharp
public object ExtensionOperationsEnabled { get; }
```

- *Type:* object

---

##### `ExtensionsTimeBudget`<sup>Required</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.extensionsTimeBudget"></a>

```csharp
public string ExtensionsTimeBudget { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.instances"></a>

```csharp
public double Instances { get; }
```

- *Type:* double

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxBidPrice`<sup>Required</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.maxBidPrice"></a>

```csharp
public double MaxBidPrice { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformFaultDomainCount`<sup>Required</sup> <a name="PlatformFaultDomainCount" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.platformFaultDomainCount"></a>

```csharp
public double PlatformFaultDomainCount { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SinglePlacementGroup`<sup>Required</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.singlePlacementGroup"></a>

```csharp
public object SinglePlacementGroup { get; }
```

- *Type:* object

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SourceImageId`<sup>Required</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.sourceImageId"></a>

```csharp
public string SourceImageId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserDataBase64`<sup>Required</sup> <a name="UserDataBase64" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.userDataBase64"></a>

```csharp
public string UserDataBase64 { get; }
```

- *Type:* string

---

##### `ZoneBalance`<sup>Required</sup> <a name="ZoneBalance" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zoneBalance"></a>

```csharp
public object ZoneBalance { get; }
```

- *Type:* object

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrchestratedVirtualMachineScaleSetAdditionalCapabilities <a name="OrchestratedVirtualMachineScaleSetAdditionalCapabilities" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetAdditionalCapabilities {
    object UltraSsdEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ultra_ssd_enabled OrchestratedVirtualMachineScaleSet#ultra_ssd_enabled}. |

---

##### `UltraSsdEnabled`<sup>Optional</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled"></a>

```csharp
public object UltraSsdEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ultra_ssd_enabled OrchestratedVirtualMachineScaleSet#ultra_ssd_enabled}.

---

### OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair <a name="OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair {
    object Enabled,
    string GracePeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enabled OrchestratedVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#grace_period OrchestratedVirtualMachineScaleSet#grace_period}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enabled OrchestratedVirtualMachineScaleSet#enabled}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#grace_period OrchestratedVirtualMachineScaleSet#grace_period}.

---

### OrchestratedVirtualMachineScaleSetBootDiagnostics <a name="OrchestratedVirtualMachineScaleSetBootDiagnostics" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetBootDiagnostics {
    string StorageAccountUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri">StorageAccountUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#storage_account_uri OrchestratedVirtualMachineScaleSet#storage_account_uri}. |

---

##### `StorageAccountUri`<sup>Optional</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri"></a>

```csharp
public string StorageAccountUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#storage_account_uri OrchestratedVirtualMachineScaleSet#storage_account_uri}.

---

### OrchestratedVirtualMachineScaleSetConfig <a name="OrchestratedVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    double PlatformFaultDomainCount,
    string ResourceGroupName,
    OrchestratedVirtualMachineScaleSetAdditionalCapabilities AdditionalCapabilities = null,
    OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair AutomaticInstanceRepair = null,
    OrchestratedVirtualMachineScaleSetBootDiagnostics BootDiagnostics = null,
    string CapacityReservationGroupId = null,
    object DataDisk = null,
    object EncryptionAtHostEnabled = null,
    string EvictionPolicy = null,
    object Extension = null,
    object ExtensionOperationsEnabled = null,
    string ExtensionsTimeBudget = null,
    string Id = null,
    OrchestratedVirtualMachineScaleSetIdentity Identity = null,
    double Instances = null,
    string LicenseType = null,
    double MaxBidPrice = null,
    object NetworkInterface = null,
    OrchestratedVirtualMachineScaleSetOsDisk OsDisk = null,
    OrchestratedVirtualMachineScaleSetOsProfile OsProfile = null,
    OrchestratedVirtualMachineScaleSetPlan Plan = null,
    string Priority = null,
    OrchestratedVirtualMachineScaleSetPriorityMix PriorityMix = null,
    string ProximityPlacementGroupId = null,
    object SinglePlacementGroup = null,
    string SkuName = null,
    string SourceImageId = null,
    OrchestratedVirtualMachineScaleSetSourceImageReference SourceImageReference = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    OrchestratedVirtualMachineScaleSetTerminationNotification TerminationNotification = null,
    OrchestratedVirtualMachineScaleSetTimeouts Timeouts = null,
    string UserDataBase64 = null,
    object ZoneBalance = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#location OrchestratedVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.platformFaultDomainCount">PlatformFaultDomainCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#platform_fault_domain_count OrchestratedVirtualMachineScaleSet#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#resource_group_name OrchestratedVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities">OrchestratedVirtualMachineScaleSetAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.automaticInstanceRepair">AutomaticInstanceRepair</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | automatic_instance_repair block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics">OrchestratedVirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#capacity_reservation_group_id OrchestratedVirtualMachineScaleSet#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.dataDisk">DataDisk</a></code> | <code>object</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#encryption_at_host_enabled OrchestratedVirtualMachineScaleSet#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#eviction_policy OrchestratedVirtualMachineScaleSet#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.extension">Extension</a></code> | <code>object</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.extensionOperationsEnabled">ExtensionOperationsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#extension_operations_enabled OrchestratedVirtualMachineScaleSet#extension_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#extensions_time_budget OrchestratedVirtualMachineScaleSet#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#id OrchestratedVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity">OrchestratedVirtualMachineScaleSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.instances">Instances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#instances OrchestratedVirtualMachineScaleSet#instances}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.licenseType">LicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#license_type OrchestratedVirtualMachineScaleSet#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.maxBidPrice">MaxBidPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#max_bid_price OrchestratedVirtualMachineScaleSet#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk">OrchestratedVirtualMachineScaleSetOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile">OrchestratedVirtualMachineScaleSetOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan">OrchestratedVirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.priority">Priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#priority OrchestratedVirtualMachineScaleSet#priority}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.priorityMix">PriorityMix</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix">OrchestratedVirtualMachineScaleSetPriorityMix</a></code> | priority_mix block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#proximity_placement_group_id OrchestratedVirtualMachineScaleSet#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#single_placement_group OrchestratedVirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#sku_name OrchestratedVirtualMachineScaleSet#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.sourceImageId">SourceImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#source_image_id OrchestratedVirtualMachineScaleSet#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference">OrchestratedVirtualMachineScaleSetSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#tags OrchestratedVirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification">OrchestratedVirtualMachineScaleSetTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts">OrchestratedVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.userDataBase64">UserDataBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#user_data_base64 OrchestratedVirtualMachineScaleSet#user_data_base64}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.zoneBalance">ZoneBalance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#zone_balance OrchestratedVirtualMachineScaleSet#zone_balance}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#zones OrchestratedVirtualMachineScaleSet#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#location OrchestratedVirtualMachineScaleSet#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}.

---

##### `PlatformFaultDomainCount`<sup>Required</sup> <a name="PlatformFaultDomainCount" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.platformFaultDomainCount"></a>

```csharp
public double PlatformFaultDomainCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#platform_fault_domain_count OrchestratedVirtualMachineScaleSet#platform_fault_domain_count}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#resource_group_name OrchestratedVirtualMachineScaleSet#resource_group_name}.

---

##### `AdditionalCapabilities`<sup>Optional</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.additionalCapabilities"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAdditionalCapabilities AdditionalCapabilities { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities">OrchestratedVirtualMachineScaleSetAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#additional_capabilities OrchestratedVirtualMachineScaleSet#additional_capabilities}

---

##### `AutomaticInstanceRepair`<sup>Optional</sup> <a name="AutomaticInstanceRepair" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.automaticInstanceRepair"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair AutomaticInstanceRepair { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair</a>

automatic_instance_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#automatic_instance_repair OrchestratedVirtualMachineScaleSet#automatic_instance_repair}

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.bootDiagnostics"></a>

```csharp
public OrchestratedVirtualMachineScaleSetBootDiagnostics BootDiagnostics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics">OrchestratedVirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#boot_diagnostics OrchestratedVirtualMachineScaleSet#boot_diagnostics}

---

##### `CapacityReservationGroupId`<sup>Optional</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#capacity_reservation_group_id OrchestratedVirtualMachineScaleSet#capacity_reservation_group_id}.

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.dataDisk"></a>

```csharp
public object DataDisk { get; set; }
```

- *Type:* object

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#data_disk OrchestratedVirtualMachineScaleSet#data_disk}

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#encryption_at_host_enabled OrchestratedVirtualMachineScaleSet#encryption_at_host_enabled}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#eviction_policy OrchestratedVirtualMachineScaleSet#eviction_policy}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.extension"></a>

```csharp
public object Extension { get; set; }
```

- *Type:* object

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#extension OrchestratedVirtualMachineScaleSet#extension}

---

##### `ExtensionOperationsEnabled`<sup>Optional</sup> <a name="ExtensionOperationsEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.extensionOperationsEnabled"></a>

```csharp
public object ExtensionOperationsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#extension_operations_enabled OrchestratedVirtualMachineScaleSet#extension_operations_enabled}.

---

##### `ExtensionsTimeBudget`<sup>Optional</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.extensionsTimeBudget"></a>

```csharp
public string ExtensionsTimeBudget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#extensions_time_budget OrchestratedVirtualMachineScaleSet#extensions_time_budget}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#id OrchestratedVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.identity"></a>

```csharp
public OrchestratedVirtualMachineScaleSetIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity">OrchestratedVirtualMachineScaleSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#identity OrchestratedVirtualMachineScaleSet#identity}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.instances"></a>

```csharp
public double Instances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#instances OrchestratedVirtualMachineScaleSet#instances}.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#license_type OrchestratedVirtualMachineScaleSet#license_type}.

---

##### `MaxBidPrice`<sup>Optional</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.maxBidPrice"></a>

```csharp
public double MaxBidPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#max_bid_price OrchestratedVirtualMachineScaleSet#max_bid_price}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#network_interface OrchestratedVirtualMachineScaleSet#network_interface}

---

##### `OsDisk`<sup>Optional</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.osDisk"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDisk OsDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk">OrchestratedVirtualMachineScaleSetOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#os_disk OrchestratedVirtualMachineScaleSet#os_disk}

---

##### `OsProfile`<sup>Optional</sup> <a name="OsProfile" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.osProfile"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfile OsProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile">OrchestratedVirtualMachineScaleSetOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#os_profile OrchestratedVirtualMachineScaleSet#os_profile}

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.plan"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPlan Plan { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan">OrchestratedVirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#plan OrchestratedVirtualMachineScaleSet#plan}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#priority OrchestratedVirtualMachineScaleSet#priority}.

---

##### `PriorityMix`<sup>Optional</sup> <a name="PriorityMix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.priorityMix"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPriorityMix PriorityMix { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix">OrchestratedVirtualMachineScaleSetPriorityMix</a>

priority_mix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#priority_mix OrchestratedVirtualMachineScaleSet#priority_mix}

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#proximity_placement_group_id OrchestratedVirtualMachineScaleSet#proximity_placement_group_id}.

---

##### `SinglePlacementGroup`<sup>Optional</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.singlePlacementGroup"></a>

```csharp
public object SinglePlacementGroup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#single_placement_group OrchestratedVirtualMachineScaleSet#single_placement_group}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#sku_name OrchestratedVirtualMachineScaleSet#sku_name}.

---

##### `SourceImageId`<sup>Optional</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.sourceImageId"></a>

```csharp
public string SourceImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#source_image_id OrchestratedVirtualMachineScaleSet#source_image_id}.

---

##### `SourceImageReference`<sup>Optional</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.sourceImageReference"></a>

```csharp
public OrchestratedVirtualMachineScaleSetSourceImageReference SourceImageReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference">OrchestratedVirtualMachineScaleSetSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#source_image_reference OrchestratedVirtualMachineScaleSet#source_image_reference}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#tags OrchestratedVirtualMachineScaleSet#tags}.

---

##### `TerminationNotification`<sup>Optional</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.terminationNotification"></a>

```csharp
public OrchestratedVirtualMachineScaleSetTerminationNotification TerminationNotification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification">OrchestratedVirtualMachineScaleSetTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#termination_notification OrchestratedVirtualMachineScaleSet#termination_notification}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.timeouts"></a>

```csharp
public OrchestratedVirtualMachineScaleSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts">OrchestratedVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#timeouts OrchestratedVirtualMachineScaleSet#timeouts}

---

##### `UserDataBase64`<sup>Optional</sup> <a name="UserDataBase64" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.userDataBase64"></a>

```csharp
public string UserDataBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#user_data_base64 OrchestratedVirtualMachineScaleSet#user_data_base64}.

---

##### `ZoneBalance`<sup>Optional</sup> <a name="ZoneBalance" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.zoneBalance"></a>

```csharp
public object ZoneBalance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#zone_balance OrchestratedVirtualMachineScaleSet#zone_balance}.

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#zones OrchestratedVirtualMachineScaleSet#zones}.

---

### OrchestratedVirtualMachineScaleSetDataDisk <a name="OrchestratedVirtualMachineScaleSetDataDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetDataDisk {
    string Caching,
    string StorageAccountType,
    string CreateOption = null,
    string DiskEncryptionSetId = null,
    double DiskSizeGb = null,
    double Lun = null,
    double UltraSsdDiskIopsReadWrite = null,
    double UltraSsdDiskMbpsReadWrite = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#caching OrchestratedVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.createOption">CreateOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#create_option OrchestratedVirtualMachineScaleSet#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#lun OrchestratedVirtualMachineScaleSet#lun}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite">UltraSsdDiskIopsReadWrite</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write OrchestratedVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite">UltraSsdDiskMbpsReadWrite</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write OrchestratedVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#caching OrchestratedVirtualMachineScaleSet#caching}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}.

---

##### `CreateOption`<sup>Optional</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.createOption"></a>

```csharp
public string CreateOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#create_option OrchestratedVirtualMachineScaleSet#create_option}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}.

---

##### `Lun`<sup>Optional</sup> <a name="Lun" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#lun OrchestratedVirtualMachineScaleSet#lun}.

---

##### `UltraSsdDiskIopsReadWrite`<sup>Optional</sup> <a name="UltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite"></a>

```csharp
public double UltraSsdDiskIopsReadWrite { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write OrchestratedVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}.

---

##### `UltraSsdDiskMbpsReadWrite`<sup>Optional</sup> <a name="UltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite"></a>

```csharp
public double UltraSsdDiskMbpsReadWrite { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write OrchestratedVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}.

---

### OrchestratedVirtualMachineScaleSetExtension <a name="OrchestratedVirtualMachineScaleSetExtension" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetExtension {
    string Name,
    string Publisher,
    string Type,
    string TypeHandlerVersion,
    object AutoUpgradeMinorVersionEnabled = null,
    string[] ExtensionsToProvisionAfterVmCreation = null,
    object FailureSuppressionEnabled = null,
    string ForceExtensionExecutionOnChange = null,
    string ProtectedSettings = null,
    OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault = null,
    string Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type_handler_version OrchestratedVirtualMachineScaleSet#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersionEnabled">AutoUpgradeMinorVersionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#auto_upgrade_minor_version_enabled OrchestratedVirtualMachineScaleSet#auto_upgrade_minor_version_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.extensionsToProvisionAfterVmCreation">ExtensionsToProvisionAfterVmCreation</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#extensions_to_provision_after_vm_creation OrchestratedVirtualMachineScaleSet#extensions_to_provision_after_vm_creation}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.failureSuppressionEnabled">FailureSuppressionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#failure_suppression_enabled OrchestratedVirtualMachineScaleSet#failure_suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.forceExtensionExecutionOnChange">ForceExtensionExecutionOnChange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#force_extension_execution_on_change OrchestratedVirtualMachineScaleSet#force_extension_execution_on_change}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#protected_settings OrchestratedVirtualMachineScaleSet#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.settings">Settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#settings OrchestratedVirtualMachineScaleSet#settings}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}.

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type_handler_version OrchestratedVirtualMachineScaleSet#type_handler_version}.

---

##### `AutoUpgradeMinorVersionEnabled`<sup>Optional</sup> <a name="AutoUpgradeMinorVersionEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersionEnabled"></a>

```csharp
public object AutoUpgradeMinorVersionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#auto_upgrade_minor_version_enabled OrchestratedVirtualMachineScaleSet#auto_upgrade_minor_version_enabled}.

---

##### `ExtensionsToProvisionAfterVmCreation`<sup>Optional</sup> <a name="ExtensionsToProvisionAfterVmCreation" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.extensionsToProvisionAfterVmCreation"></a>

```csharp
public string[] ExtensionsToProvisionAfterVmCreation { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#extensions_to_provision_after_vm_creation OrchestratedVirtualMachineScaleSet#extensions_to_provision_after_vm_creation}.

---

##### `FailureSuppressionEnabled`<sup>Optional</sup> <a name="FailureSuppressionEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.failureSuppressionEnabled"></a>

```csharp
public object FailureSuppressionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#failure_suppression_enabled OrchestratedVirtualMachineScaleSet#failure_suppression_enabled}.

---

##### `ForceExtensionExecutionOnChange`<sup>Optional</sup> <a name="ForceExtensionExecutionOnChange" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.forceExtensionExecutionOnChange"></a>

```csharp
public string ForceExtensionExecutionOnChange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#force_extension_execution_on_change OrchestratedVirtualMachineScaleSet#force_extension_execution_on_change}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#protected_settings OrchestratedVirtualMachineScaleSet#protected_settings}.

---

##### `ProtectedSettingsFromKeyVault`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault"></a>

```csharp
public OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#protected_settings_from_key_vault OrchestratedVirtualMachineScaleSet#protected_settings_from_key_vault}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtension.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#settings OrchestratedVirtualMachineScaleSet#settings}.

---

### OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault <a name="OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault {
    string SecretUrl,
    string SourceVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl">SecretUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#secret_url OrchestratedVirtualMachineScaleSet#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#source_vault_id OrchestratedVirtualMachineScaleSet#source_vault_id}. |

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```csharp
public string SecretUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#secret_url OrchestratedVirtualMachineScaleSet#secret_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#source_vault_id OrchestratedVirtualMachineScaleSet#source_vault_id}.

---

### OrchestratedVirtualMachineScaleSetIdentity <a name="OrchestratedVirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#identity_ids OrchestratedVirtualMachineScaleSet#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#identity_ids OrchestratedVirtualMachineScaleSet#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}.

---

### OrchestratedVirtualMachineScaleSetNetworkInterface <a name="OrchestratedVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterface {
    object IpConfiguration,
    string Name,
    string[] DnsServers = null,
    object EnableAcceleratedNetworking = null,
    object EnableIpForwarding = null,
    string NetworkSecurityGroupId = null,
    object Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.ipConfiguration">IpConfiguration</a></code> | <code>object</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#dns_servers OrchestratedVirtualMachineScaleSet#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking">EnableAcceleratedNetworking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enable_accelerated_networking OrchestratedVirtualMachineScaleSet#enable_accelerated_networking}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enable_ip_forwarding OrchestratedVirtualMachineScaleSet#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#network_security_group_id OrchestratedVirtualMachineScaleSet#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.primary">Primary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#primary OrchestratedVirtualMachineScaleSet#primary}. |

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.ipConfiguration"></a>

```csharp
public object IpConfiguration { get; set; }
```

- *Type:* object

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ip_configuration OrchestratedVirtualMachineScaleSet#ip_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}.

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#dns_servers OrchestratedVirtualMachineScaleSet#dns_servers}.

---

##### `EnableAcceleratedNetworking`<sup>Optional</sup> <a name="EnableAcceleratedNetworking" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking"></a>

```csharp
public object EnableAcceleratedNetworking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enable_accelerated_networking OrchestratedVirtualMachineScaleSet#enable_accelerated_networking}.

---

##### `EnableIpForwarding`<sup>Optional</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enable_ip_forwarding OrchestratedVirtualMachineScaleSet#enable_ip_forwarding}.

---

##### `NetworkSecurityGroupId`<sup>Optional</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#network_security_group_id OrchestratedVirtualMachineScaleSet#network_security_group_id}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterface.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#primary OrchestratedVirtualMachineScaleSet#primary}.

---

### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
    string Name,
    string[] ApplicationGatewayBackendAddressPoolIds = null,
    string[] ApplicationSecurityGroupIds = null,
    string[] LoadBalancerBackendAddressPoolIds = null,
    object Primary = null,
    object PublicIpAddress = null,
    string SubnetId = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#application_gateway_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#application_security_group_ids OrchestratedVirtualMachineScaleSet#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#load_balancer_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary">Primary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#primary OrchestratedVirtualMachineScaleSet#primary}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress">PublicIpAddress</a></code> | <code>object</code> | public_ip_address block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#subnet_id OrchestratedVirtualMachineScaleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}.

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds"></a>

```csharp
public string[] ApplicationGatewayBackendAddressPoolIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#application_gateway_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}.

---

##### `ApplicationSecurityGroupIds`<sup>Optional</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds"></a>

```csharp
public string[] ApplicationSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#application_security_group_ids OrchestratedVirtualMachineScaleSet#application_security_group_ids}.

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds"></a>

```csharp
public string[] LoadBalancerBackendAddressPoolIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#load_balancer_backend_address_pool_ids OrchestratedVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#primary OrchestratedVirtualMachineScaleSet#primary}.

---

##### `PublicIpAddress`<sup>Optional</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress"></a>

```csharp
public object PublicIpAddress { get; set; }
```

- *Type:* object

public_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#public_ip_address OrchestratedVirtualMachineScaleSet#public_ip_address}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#subnet_id OrchestratedVirtualMachineScaleSet#subnet_id}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}.

---

### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
    string Name,
    string DomainNameLabel = null,
    double IdleTimeoutInMinutes = null,
    object IpTag = null,
    string PublicIpPrefixId = null,
    string SkuName = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel">DomainNameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#domain_name_label OrchestratedVirtualMachineScaleSet#domain_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#idle_timeout_in_minutes OrchestratedVirtualMachineScaleSet#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag">IpTag</a></code> | <code>object</code> | ip_tag block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#public_ip_prefix_id OrchestratedVirtualMachineScaleSet#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#sku_name OrchestratedVirtualMachineScaleSet#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}.

---

##### `DomainNameLabel`<sup>Optional</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel"></a>

```csharp
public string DomainNameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#domain_name_label OrchestratedVirtualMachineScaleSet#domain_name_label}.

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes"></a>

```csharp
public double IdleTimeoutInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#idle_timeout_in_minutes OrchestratedVirtualMachineScaleSet#idle_timeout_in_minutes}.

---

##### `IpTag`<sup>Optional</sup> <a name="IpTag" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag"></a>

```csharp
public object IpTag { get; set; }
```

- *Type:* object

ip_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#ip_tag OrchestratedVirtualMachineScaleSet#ip_tag}

---

##### `PublicIpPrefixId`<sup>Optional</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId"></a>

```csharp
public string PublicIpPrefixId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#public_ip_prefix_id OrchestratedVirtualMachineScaleSet#public_ip_prefix_id}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#sku_name OrchestratedVirtualMachineScaleSet#sku_name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}.

---

### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
    string Tag,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#tag OrchestratedVirtualMachineScaleSet#tag}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}. |

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#tag OrchestratedVirtualMachineScaleSet#tag}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#type OrchestratedVirtualMachineScaleSet#type}.

---

### OrchestratedVirtualMachineScaleSetOsDisk <a name="OrchestratedVirtualMachineScaleSetOsDisk" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsDisk {
    string Caching,
    string StorageAccountType,
    OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings DiffDiskSettings = null,
    string DiskEncryptionSetId = null,
    double DiskSizeGb = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#caching OrchestratedVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#caching OrchestratedVirtualMachineScaleSet#caching}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#storage_account_type OrchestratedVirtualMachineScaleSet#storage_account_type}.

---

##### `DiffDiskSettings`<sup>Optional</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.diffDiskSettings"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings DiffDiskSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#diff_disk_settings OrchestratedVirtualMachineScaleSet#diff_disk_settings}

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_encryption_set_id OrchestratedVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disk_size_gb OrchestratedVirtualMachineScaleSet#disk_size_gb}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#write_accelerator_enabled OrchestratedVirtualMachineScaleSet#write_accelerator_enabled}.

---

### OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings <a name="OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings {
    string Option,
    string Placement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option">Option</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#option OrchestratedVirtualMachineScaleSet#option}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement">Placement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#placement OrchestratedVirtualMachineScaleSet#placement}. |

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option"></a>

```csharp
public string Option { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#option OrchestratedVirtualMachineScaleSet#option}.

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement"></a>

```csharp
public string Placement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#placement OrchestratedVirtualMachineScaleSet#placement}.

---

### OrchestratedVirtualMachineScaleSetOsProfile <a name="OrchestratedVirtualMachineScaleSetOsProfile" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfile {
    string CustomData = null,
    OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration LinuxConfiguration = null,
    OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration WindowsConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile.property.customData">CustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#custom_data OrchestratedVirtualMachineScaleSet#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile.property.linuxConfiguration">LinuxConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration</a></code> | linux_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile.property.windowsConfiguration">WindowsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration</a></code> | windows_configuration block. |

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile.property.customData"></a>

```csharp
public string CustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#custom_data OrchestratedVirtualMachineScaleSet#custom_data}.

---

##### `LinuxConfiguration`<sup>Optional</sup> <a name="LinuxConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile.property.linuxConfiguration"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration LinuxConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration</a>

linux_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#linux_configuration OrchestratedVirtualMachineScaleSet#linux_configuration}

---

##### `WindowsConfiguration`<sup>Optional</sup> <a name="WindowsConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile.property.windowsConfiguration"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration WindowsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration</a>

windows_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#windows_configuration OrchestratedVirtualMachineScaleSet#windows_configuration}

---

### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration {
    string AdminUsername,
    string AdminPassword = null,
    object AdminSshKey = null,
    string ComputerNamePrefix = null,
    object DisablePasswordAuthentication = null,
    string PatchAssessmentMode = null,
    string PatchMode = null,
    object ProvisionVmAgent = null,
    object Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_username OrchestratedVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_password OrchestratedVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.adminSshKey">AdminSshKey</a></code> | <code>object</code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disable_password_authentication OrchestratedVirtualMachineScaleSet#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_assessment_mode OrchestratedVirtualMachineScaleSet#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.patchMode">PatchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_mode OrchestratedVirtualMachineScaleSet#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.secret">Secret</a></code> | <code>object</code> | secret block. |

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_username OrchestratedVirtualMachineScaleSet#admin_username}.

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_password OrchestratedVirtualMachineScaleSet#admin_password}.

---

##### `AdminSshKey`<sup>Optional</sup> <a name="AdminSshKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.adminSshKey"></a>

```csharp
public object AdminSshKey { get; set; }
```

- *Type:* object

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_ssh_key OrchestratedVirtualMachineScaleSet#admin_ssh_key}

---

##### `ComputerNamePrefix`<sup>Optional</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.computerNamePrefix"></a>

```csharp
public string ComputerNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}.

---

##### `DisablePasswordAuthentication`<sup>Optional</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.disablePasswordAuthentication"></a>

```csharp
public object DisablePasswordAuthentication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#disable_password_authentication OrchestratedVirtualMachineScaleSet#disable_password_authentication}.

---

##### `PatchAssessmentMode`<sup>Optional</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.patchAssessmentMode"></a>

```csharp
public string PatchAssessmentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_assessment_mode OrchestratedVirtualMachineScaleSet#patch_assessment_mode}.

---

##### `PatchMode`<sup>Optional</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.patchMode"></a>

```csharp
public string PatchMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_mode OrchestratedVirtualMachineScaleSet#patch_mode}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#secret OrchestratedVirtualMachineScaleSet#secret}

---

### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey {
    string PublicKey,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#public_key OrchestratedVirtualMachineScaleSet#public_key}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#username OrchestratedVirtualMachineScaleSet#username}. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#public_key OrchestratedVirtualMachineScaleSet#public_key}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKey.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#username OrchestratedVirtualMachineScaleSet#username}.

---

### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret {
    object Certificate,
    string KeyVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret.property.certificate">Certificate</a></code> | <code>object</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#certificate OrchestratedVirtualMachineScaleSet#certificate}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecret.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}.

---

### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#url OrchestratedVirtualMachineScaleSet#url}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificate.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#url OrchestratedVirtualMachineScaleSet#url}.

---

### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration {
    string AdminPassword,
    string AdminUsername,
    object AdditionalUnattendContent = null,
    string ComputerNamePrefix = null,
    object EnableAutomaticUpdates = null,
    object HotpatchingEnabled = null,
    string PatchAssessmentMode = null,
    string PatchMode = null,
    object ProvisionVmAgent = null,
    object Secret = null,
    string Timezone = null,
    object WinrmListener = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_password OrchestratedVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_username OrchestratedVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code>object</code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enable_automatic_updates OrchestratedVirtualMachineScaleSet#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.hotpatchingEnabled">HotpatchingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#hotpatching_enabled OrchestratedVirtualMachineScaleSet#hotpatching_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_assessment_mode OrchestratedVirtualMachineScaleSet#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.patchMode">PatchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_mode OrchestratedVirtualMachineScaleSet#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.secret">Secret</a></code> | <code>object</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#timezone OrchestratedVirtualMachineScaleSet#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.winrmListener">WinrmListener</a></code> | <code>object</code> | winrm_listener block. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_password OrchestratedVirtualMachineScaleSet#admin_password}.

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#admin_username OrchestratedVirtualMachineScaleSet#admin_username}.

---

##### `AdditionalUnattendContent`<sup>Optional</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.additionalUnattendContent"></a>

```csharp
public object AdditionalUnattendContent { get; set; }
```

- *Type:* object

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#additional_unattend_content OrchestratedVirtualMachineScaleSet#additional_unattend_content}

---

##### `ComputerNamePrefix`<sup>Optional</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.computerNamePrefix"></a>

```csharp
public string ComputerNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#computer_name_prefix OrchestratedVirtualMachineScaleSet#computer_name_prefix}.

---

##### `EnableAutomaticUpdates`<sup>Optional</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.enableAutomaticUpdates"></a>

```csharp
public object EnableAutomaticUpdates { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enable_automatic_updates OrchestratedVirtualMachineScaleSet#enable_automatic_updates}.

---

##### `HotpatchingEnabled`<sup>Optional</sup> <a name="HotpatchingEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.hotpatchingEnabled"></a>

```csharp
public object HotpatchingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#hotpatching_enabled OrchestratedVirtualMachineScaleSet#hotpatching_enabled}.

---

##### `PatchAssessmentMode`<sup>Optional</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.patchAssessmentMode"></a>

```csharp
public string PatchAssessmentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_assessment_mode OrchestratedVirtualMachineScaleSet#patch_assessment_mode}.

---

##### `PatchMode`<sup>Optional</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.patchMode"></a>

```csharp
public string PatchMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#patch_mode OrchestratedVirtualMachineScaleSet#patch_mode}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#provision_vm_agent OrchestratedVirtualMachineScaleSet#provision_vm_agent}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#secret OrchestratedVirtualMachineScaleSet#secret}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#timezone OrchestratedVirtualMachineScaleSet#timezone}.

---

##### `WinrmListener`<sup>Optional</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration.property.winrmListener"></a>

```csharp
public object WinrmListener { get; set; }
```

- *Type:* object

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#winrm_listener OrchestratedVirtualMachineScaleSet#winrm_listener}

---

### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent {
    string Content,
    string Setting
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#content OrchestratedVirtualMachineScaleSet#content}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent.property.setting">Setting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#setting OrchestratedVirtualMachineScaleSet#setting}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#content OrchestratedVirtualMachineScaleSet#content}.

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContent.property.setting"></a>

```csharp
public string Setting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#setting OrchestratedVirtualMachineScaleSet#setting}.

---

### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret {
    object Certificate,
    string KeyVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret.property.certificate">Certificate</a></code> | <code>object</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#certificate OrchestratedVirtualMachineScaleSet#certificate}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecret.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#key_vault_id OrchestratedVirtualMachineScaleSet#key_vault_id}.

---

### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate {
    string Store,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate.property.store">Store</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#store OrchestratedVirtualMachineScaleSet#store}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#url OrchestratedVirtualMachineScaleSet#url}. |

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate.property.store"></a>

```csharp
public string Store { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#store OrchestratedVirtualMachineScaleSet#store}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificate.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#url OrchestratedVirtualMachineScaleSet#url}.

---

### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener {
    string Protocol,
    string CertificateUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#protocol OrchestratedVirtualMachineScaleSet#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#certificate_url OrchestratedVirtualMachineScaleSet#certificate_url}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#protocol OrchestratedVirtualMachineScaleSet#protocol}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListener.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#certificate_url OrchestratedVirtualMachineScaleSet#certificate_url}.

---

### OrchestratedVirtualMachineScaleSetPlan <a name="OrchestratedVirtualMachineScaleSetPlan" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetPlan {
    string Name,
    string Product,
    string Publisher
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#product OrchestratedVirtualMachineScaleSet#product}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#name OrchestratedVirtualMachineScaleSet#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#product OrchestratedVirtualMachineScaleSet#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}.

---

### OrchestratedVirtualMachineScaleSetPriorityMix <a name="OrchestratedVirtualMachineScaleSetPriorityMix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetPriorityMix {
    double BaseRegularCount = null,
    double RegularPercentageAboveBase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix.property.baseRegularCount">BaseRegularCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#base_regular_count OrchestratedVirtualMachineScaleSet#base_regular_count}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix.property.regularPercentageAboveBase">RegularPercentageAboveBase</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#regular_percentage_above_base OrchestratedVirtualMachineScaleSet#regular_percentage_above_base}. |

---

##### `BaseRegularCount`<sup>Optional</sup> <a name="BaseRegularCount" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix.property.baseRegularCount"></a>

```csharp
public double BaseRegularCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#base_regular_count OrchestratedVirtualMachineScaleSet#base_regular_count}.

---

##### `RegularPercentageAboveBase`<sup>Optional</sup> <a name="RegularPercentageAboveBase" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix.property.regularPercentageAboveBase"></a>

```csharp
public double RegularPercentageAboveBase { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#regular_percentage_above_base OrchestratedVirtualMachineScaleSet#regular_percentage_above_base}.

---

### OrchestratedVirtualMachineScaleSetSourceImageReference <a name="OrchestratedVirtualMachineScaleSetSourceImageReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetSourceImageReference {
    string Offer,
    string Publisher,
    string Sku,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#offer OrchestratedVirtualMachineScaleSet#offer}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#sku OrchestratedVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#offer OrchestratedVirtualMachineScaleSet#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#publisher OrchestratedVirtualMachineScaleSet#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#sku OrchestratedVirtualMachineScaleSet#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#version OrchestratedVirtualMachineScaleSet#version}.

---

### OrchestratedVirtualMachineScaleSetTerminationNotification <a name="OrchestratedVirtualMachineScaleSetTerminationNotification" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetTerminationNotification {
    object Enabled,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enabled OrchestratedVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification.property.timeout">Timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#timeout OrchestratedVirtualMachineScaleSet#timeout}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#enabled OrchestratedVirtualMachineScaleSet#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#timeout OrchestratedVirtualMachineScaleSet#timeout}.

---

### OrchestratedVirtualMachineScaleSetTimeouts <a name="OrchestratedVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#create OrchestratedVirtualMachineScaleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#delete OrchestratedVirtualMachineScaleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#read OrchestratedVirtualMachineScaleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#update OrchestratedVirtualMachineScaleSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#create OrchestratedVirtualMachineScaleSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#delete OrchestratedVirtualMachineScaleSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#read OrchestratedVirtualMachineScaleSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/orchestrated_virtual_machine_scale_set#update OrchestratedVirtualMachineScaleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference <a name="OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">ResetUltraSsdEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUltraSsdEnabled` <a name="ResetUltraSsdEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```csharp
private void ResetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">UltraSsdEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities">OrchestratedVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UltraSsdEnabledInput`<sup>Optional</sup> <a name="UltraSsdEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```csharp
public object UltraSsdEnabledInput { get; }
```

- *Type:* object

---

##### `UltraSsdEnabled`<sup>Required</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```csharp
public object UltraSsdEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAdditionalCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAdditionalCapabilities">OrchestratedVirtualMachineScaleSetAdditionalCapabilities</a>

---


### OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference <a name="OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput"></a>

```csharp
public string GracePeriodInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair">OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair</a>

---


### OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference <a name="OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.resetStorageAccountUri">ResetStorageAccountUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageAccountUri` <a name="ResetStorageAccountUri" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```csharp
private void ResetStorageAccountUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput">StorageAccountUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri">StorageAccountUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics">OrchestratedVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageAccountUriInput`<sup>Optional</sup> <a name="StorageAccountUriInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```csharp
public string StorageAccountUriInput { get; }
```

- *Type:* string

---

##### `StorageAccountUri`<sup>Required</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```csharp
public string StorageAccountUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetBootDiagnostics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetBootDiagnostics">OrchestratedVirtualMachineScaleSetBootDiagnostics</a>

---


### OrchestratedVirtualMachineScaleSetDataDiskList <a name="OrchestratedVirtualMachineScaleSetDataDiskList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetDataDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetDataDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetDataDiskOutputReference <a name="OrchestratedVirtualMachineScaleSetDataDiskOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption">ResetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetLun">ResetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskIopsReadWrite">ResetUltraSsdDiskIopsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskMbpsReadWrite">ResetUltraSsdDiskMbpsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateOption` <a name="ResetCreateOption" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption"></a>

```csharp
private void ResetCreateOption()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetLun` <a name="ResetLun" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetLun"></a>

```csharp
private void ResetLun()
```

##### `ResetUltraSsdDiskIopsReadWrite` <a name="ResetUltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskIopsReadWrite"></a>

```csharp
private void ResetUltraSsdDiskIopsReadWrite()
```

##### `ResetUltraSsdDiskMbpsReadWrite` <a name="ResetUltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskMbpsReadWrite"></a>

```csharp
private void ResetUltraSsdDiskMbpsReadWrite()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput">UltraSsdDiskIopsReadWriteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput">UltraSsdDiskMbpsReadWriteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.createOption">CreateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite">UltraSsdDiskIopsReadWrite</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite">UltraSsdDiskMbpsReadWrite</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput"></a>

```csharp
public string CreateOptionInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `UltraSsdDiskIopsReadWriteInput`<sup>Optional</sup> <a name="UltraSsdDiskIopsReadWriteInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput"></a>

```csharp
public double UltraSsdDiskIopsReadWriteInput { get; }
```

- *Type:* double

---

##### `UltraSsdDiskMbpsReadWriteInput`<sup>Optional</sup> <a name="UltraSsdDiskMbpsReadWriteInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput"></a>

```csharp
public double UltraSsdDiskMbpsReadWriteInput { get; }
```

- *Type:* double

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.createOption"></a>

```csharp
public string CreateOption { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `UltraSsdDiskIopsReadWrite`<sup>Required</sup> <a name="UltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite"></a>

```csharp
public double UltraSsdDiskIopsReadWrite { get; }
```

- *Type:* double

---

##### `UltraSsdDiskMbpsReadWrite`<sup>Required</sup> <a name="UltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite"></a>

```csharp
public double UltraSsdDiskMbpsReadWrite { get; }
```

- *Type:* double

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetDataDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetExtensionList <a name="OrchestratedVirtualMachineScaleSetExtensionList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetExtensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetExtensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetExtensionOutputReference <a name="OrchestratedVirtualMachineScaleSetExtensionOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault">PutProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersionEnabled">ResetAutoUpgradeMinorVersionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetExtensionsToProvisionAfterVmCreation">ResetExtensionsToProvisionAfterVmCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetFailureSuppressionEnabled">ResetFailureSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetForceExtensionExecutionOnChange">ResetForceExtensionExecutionOnChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettingsFromKeyVault">ResetProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectedSettingsFromKeyVault` <a name="PutProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault"></a>

```csharp
private void PutProtectedSettingsFromKeyVault(OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `ResetAutoUpgradeMinorVersionEnabled` <a name="ResetAutoUpgradeMinorVersionEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersionEnabled"></a>

```csharp
private void ResetAutoUpgradeMinorVersionEnabled()
```

##### `ResetExtensionsToProvisionAfterVmCreation` <a name="ResetExtensionsToProvisionAfterVmCreation" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetExtensionsToProvisionAfterVmCreation"></a>

```csharp
private void ResetExtensionsToProvisionAfterVmCreation()
```

##### `ResetFailureSuppressionEnabled` <a name="ResetFailureSuppressionEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetFailureSuppressionEnabled"></a>

```csharp
private void ResetFailureSuppressionEnabled()
```

##### `ResetForceExtensionExecutionOnChange` <a name="ResetForceExtensionExecutionOnChange" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetForceExtensionExecutionOnChange"></a>

```csharp
private void ResetForceExtensionExecutionOnChange()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings"></a>

```csharp
private void ResetProtectedSettings()
```

##### `ResetProtectedSettingsFromKeyVault` <a name="ResetProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettingsFromKeyVault"></a>

```csharp
private void ResetProtectedSettingsFromKeyVault()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionEnabledInput">AutoUpgradeMinorVersionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.extensionsToProvisionAfterVmCreationInput">ExtensionsToProvisionAfterVmCreationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.failureSuppressionEnabledInput">FailureSuppressionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.forceExtensionExecutionOnChangeInput">ForceExtensionExecutionOnChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput">ProtectedSettingsFromKeyVaultInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput">TypeHandlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionEnabled">AutoUpgradeMinorVersionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.extensionsToProvisionAfterVmCreation">ExtensionsToProvisionAfterVmCreation</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.failureSuppressionEnabled">FailureSuppressionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.forceExtensionExecutionOnChange">ForceExtensionExecutionOnChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtectedSettingsFromKeyVault`<sup>Required</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault"></a>

```csharp
public OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference ProtectedSettingsFromKeyVault { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `AutoUpgradeMinorVersionEnabledInput`<sup>Optional</sup> <a name="AutoUpgradeMinorVersionEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionEnabledInput"></a>

```csharp
public object AutoUpgradeMinorVersionEnabledInput { get; }
```

- *Type:* object

---

##### `ExtensionsToProvisionAfterVmCreationInput`<sup>Optional</sup> <a name="ExtensionsToProvisionAfterVmCreationInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.extensionsToProvisionAfterVmCreationInput"></a>

```csharp
public string[] ExtensionsToProvisionAfterVmCreationInput { get; }
```

- *Type:* string[]

---

##### `FailureSuppressionEnabledInput`<sup>Optional</sup> <a name="FailureSuppressionEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.failureSuppressionEnabledInput"></a>

```csharp
public object FailureSuppressionEnabledInput { get; }
```

- *Type:* object

---

##### `ForceExtensionExecutionOnChangeInput`<sup>Optional</sup> <a name="ForceExtensionExecutionOnChangeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.forceExtensionExecutionOnChangeInput"></a>

```csharp
public string ForceExtensionExecutionOnChangeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectedSettingsFromKeyVaultInput`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVaultInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVaultInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput"></a>

```csharp
public string ProtectedSettingsInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `TypeHandlerVersionInput`<sup>Optional</sup> <a name="TypeHandlerVersionInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput"></a>

```csharp
public string TypeHandlerVersionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AutoUpgradeMinorVersionEnabled`<sup>Required</sup> <a name="AutoUpgradeMinorVersionEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionEnabled"></a>

```csharp
public object AutoUpgradeMinorVersionEnabled { get; }
```

- *Type:* object

---

##### `ExtensionsToProvisionAfterVmCreation`<sup>Required</sup> <a name="ExtensionsToProvisionAfterVmCreation" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.extensionsToProvisionAfterVmCreation"></a>

```csharp
public string[] ExtensionsToProvisionAfterVmCreation { get; }
```

- *Type:* string[]

---

##### `FailureSuppressionEnabled`<sup>Required</sup> <a name="FailureSuppressionEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.failureSuppressionEnabled"></a>

```csharp
public object FailureSuppressionEnabled { get; }
```

- *Type:* object

---

##### `ForceExtensionExecutionOnChange`<sup>Required</sup> <a name="ForceExtensionExecutionOnChange" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.forceExtensionExecutionOnChange"></a>

```csharp
public string ForceExtensionExecutionOnChange { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference <a name="OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">SecretUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">SecretUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretUrlInput`<sup>Optional</sup> <a name="SecretUrlInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```csharp
public string SecretUrlInput { get; }
```

- *Type:* string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```csharp
public string SourceVaultIdInput { get; }
```

- *Type:* string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```csharp
public string SecretUrl { get; }
```

- *Type:* string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">OrchestratedVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---


### OrchestratedVirtualMachineScaleSetIdentityOutputReference <a name="OrchestratedVirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity">OrchestratedVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetIdentity">OrchestratedVirtualMachineScaleSetIdentity</a>

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress">PutPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds">ResetApplicationGatewayBackendAddressPoolIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationSecurityGroupIds">ResetApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds">ResetLoadBalancerBackendAddressPoolIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddress">ResetPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicIpAddress` <a name="PutPublicIpAddress" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress"></a>

```csharp
private void PutPublicIpAddress(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress.parameter.value"></a>

- *Type:* object

---

##### `ResetApplicationGatewayBackendAddressPoolIds` <a name="ResetApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds"></a>

```csharp
private void ResetApplicationGatewayBackendAddressPoolIds()
```

##### `ResetApplicationSecurityGroupIds` <a name="ResetApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationSecurityGroupIds"></a>

```csharp
private void ResetApplicationSecurityGroupIds()
```

##### `ResetLoadBalancerBackendAddressPoolIds` <a name="ResetLoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds"></a>

```csharp
private void ResetLoadBalancerBackendAddressPoolIds()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetPublicIpAddress` <a name="ResetPublicIpAddress" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddress"></a>

```csharp
private void ResetPublicIpAddress()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput">ApplicationGatewayBackendAddressPoolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput">ApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput">LoadBalancerBackendAddressPoolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput">PublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```csharp
public OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList PublicIpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `ApplicationGatewayBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput"></a>

```csharp
public string[] ApplicationGatewayBackendAddressPoolIdsInput { get; }
```

- *Type:* string[]

---

##### `ApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput"></a>

```csharp
public string[] ApplicationSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancerBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput"></a>

```csharp
public string[] LoadBalancerBackendAddressPoolIdsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `PublicIpAddressInput`<sup>Optional</sup> <a name="PublicIpAddressInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput"></a>

```csharp
public object PublicIpAddressInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```csharp
public string[] ApplicationGatewayBackendAddressPoolIds { get; }
```

- *Type:* string[]

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```csharp
public string[] ApplicationSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```csharp
public string[] LoadBalancerBackendAddressPoolIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag">PutIpTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetDomainNameLabel">ResetDomainNameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIdleTimeoutInMinutes">ResetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIpTag">ResetIpTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetPublicIpPrefixId">ResetPublicIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpTag` <a name="PutIpTag" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag"></a>

```csharp
private void PutIpTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag.parameter.value"></a>

- *Type:* object

---

##### `ResetDomainNameLabel` <a name="ResetDomainNameLabel" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetDomainNameLabel"></a>

```csharp
private void ResetDomainNameLabel()
```

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIdleTimeoutInMinutes"></a>

```csharp
private void ResetIdleTimeoutInMinutes()
```

##### `ResetIpTag` <a name="ResetIpTag" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIpTag"></a>

```csharp
private void ResetIpTag()
```

##### `ResetPublicIpPrefixId` <a name="ResetPublicIpPrefixId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetPublicIpPrefixId"></a>

```csharp
private void ResetPublicIpPrefixId()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">IpTag</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput">DomainNameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput">IpTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput">PublicIpPrefixIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">DomainNameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpTag`<sup>Required</sup> <a name="IpTag" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```csharp
public OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList IpTag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `DomainNameLabelInput`<sup>Optional</sup> <a name="DomainNameLabelInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput"></a>

```csharp
public string DomainNameLabelInput { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput"></a>

```csharp
public double IdleTimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `IpTagInput`<sup>Optional</sup> <a name="IpTagInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput"></a>

```csharp
public object IpTagInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicIpPrefixIdInput`<sup>Optional</sup> <a name="PublicIpPrefixIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput"></a>

```csharp
public string PublicIpPrefixIdInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```csharp
public string DomainNameLabel { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```csharp
public double IdleTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicIpPrefixId`<sup>Required</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```csharp
public string PublicIpPrefixId { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceList <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration">PutIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableAcceleratedNetworking">ResetEnableAcceleratedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding">ResetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId">ResetNetworkSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpConfiguration` <a name="PutIpConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration"></a>

```csharp
private void PutIpConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers"></a>

```csharp
private void ResetDnsServers()
```

##### `ResetEnableAcceleratedNetworking` <a name="ResetEnableAcceleratedNetworking" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableAcceleratedNetworking"></a>

```csharp
private void ResetEnableAcceleratedNetworking()
```

##### `ResetEnableIpForwarding` <a name="ResetEnableIpForwarding" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```csharp
private void ResetEnableIpForwarding()
```

##### `ResetNetworkSecurityGroupId` <a name="ResetNetworkSecurityGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId"></a>

```csharp
private void ResetNetworkSecurityGroupId()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput">EnableAcceleratedNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput">EnableIpForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput">NetworkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking">EnableAcceleratedNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```csharp
public OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList IpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">OrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput"></a>

```csharp
public string[] DnsServersInput { get; }
```

- *Type:* string[]

---

##### `EnableAcceleratedNetworkingInput`<sup>Optional</sup> <a name="EnableAcceleratedNetworkingInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput"></a>

```csharp
public object EnableAcceleratedNetworkingInput { get; }
```

- *Type:* object

---

##### `EnableIpForwardingInput`<sup>Optional</sup> <a name="EnableIpForwardingInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```csharp
public object EnableIpForwardingInput { get; }
```

- *Type:* object

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput"></a>

```csharp
public object IpConfigurationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupIdInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput"></a>

```csharp
public string NetworkSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `EnableAcceleratedNetworking`<sup>Required</sup> <a name="EnableAcceleratedNetworking" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking"></a>

```csharp
public object EnableAcceleratedNetworking { get; }
```

- *Type:* object

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference <a name="OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```csharp
private void ResetPlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput">OptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput">PlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option">Option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement">Placement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```csharp
public string OptionInput { get; }
```

- *Type:* string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```csharp
public string PlacementInput { get; }
```

- *Type:* string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```csharp
public string Option { get; }
```

- *Type:* string

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```csharp
public string Placement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---


### OrchestratedVirtualMachineScaleSetOsDiskOutputReference <a name="OrchestratedVirtualMachineScaleSetOsDiskOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings">PutDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings">ResetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiffDiskSettings` <a name="PutDiffDiskSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings"></a>

```csharp
private void PutDiffDiskSettings(OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `ResetDiffDiskSettings` <a name="ResetDiffDiskSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings"></a>

```csharp
private void ResetDiffDiskSettings()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput">DiffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk">OrchestratedVirtualMachineScaleSetOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiffDiskSettings`<sup>Required</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference DiffDiskSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `DiffDiskSettingsInput`<sup>Optional</sup> <a name="DiffDiskSettingsInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings DiffDiskSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings">OrchestratedVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDiskOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsDisk">OrchestratedVirtualMachineScaleSetOsDisk</a>

---


### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.putAdminSshKey">PutAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetAdminSshKey">ResetAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetComputerNamePrefix">ResetComputerNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetDisablePasswordAuthentication">ResetDisablePasswordAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetPatchAssessmentMode">ResetPatchAssessmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetPatchMode">ResetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetProvisionVmAgent">ResetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminSshKey` <a name="PutAdminSshKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.putAdminSshKey"></a>

```csharp
private void PutAdminSshKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.putAdminSshKey.parameter.value"></a>

- *Type:* object

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.putSecret.parameter.value"></a>

- *Type:* object

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminSshKey` <a name="ResetAdminSshKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetAdminSshKey"></a>

```csharp
private void ResetAdminSshKey()
```

##### `ResetComputerNamePrefix` <a name="ResetComputerNamePrefix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetComputerNamePrefix"></a>

```csharp
private void ResetComputerNamePrefix()
```

##### `ResetDisablePasswordAuthentication` <a name="ResetDisablePasswordAuthentication" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetDisablePasswordAuthentication"></a>

```csharp
private void ResetDisablePasswordAuthentication()
```

##### `ResetPatchAssessmentMode` <a name="ResetPatchAssessmentMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetPatchAssessmentMode"></a>

```csharp
private void ResetPatchAssessmentMode()
```

##### `ResetPatchMode` <a name="ResetPatchMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetPatchMode"></a>

```csharp
private void ResetPatchMode()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetProvisionVmAgent"></a>

```csharp
private void ResetProvisionVmAgent()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminSshKey">AdminSshKey</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminSshKeyInput">AdminSshKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.computerNamePrefixInput">ComputerNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.disablePasswordAuthenticationInput">DisablePasswordAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchAssessmentModeInput">PatchAssessmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchModeInput">PatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchMode">PatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminSshKey`<sup>Required</sup> <a name="AdminSshKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminSshKey"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList AdminSshKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationAdminSshKeyList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.secret"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminSshKeyInput`<sup>Optional</sup> <a name="AdminSshKeyInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminSshKeyInput"></a>

```csharp
public object AdminSshKeyInput { get; }
```

- *Type:* object

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `ComputerNamePrefixInput`<sup>Optional</sup> <a name="ComputerNamePrefixInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.computerNamePrefixInput"></a>

```csharp
public string ComputerNamePrefixInput { get; }
```

- *Type:* string

---

##### `DisablePasswordAuthenticationInput`<sup>Optional</sup> <a name="DisablePasswordAuthenticationInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.disablePasswordAuthenticationInput"></a>

```csharp
public object DisablePasswordAuthenticationInput { get; }
```

- *Type:* object

---

##### `PatchAssessmentModeInput`<sup>Optional</sup> <a name="PatchAssessmentModeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchAssessmentModeInput"></a>

```csharp
public string PatchAssessmentModeInput { get; }
```

- *Type:* string

---

##### `PatchModeInput`<sup>Optional</sup> <a name="PatchModeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchModeInput"></a>

```csharp
public string PatchModeInput { get; }
```

- *Type:* string

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.provisionVmAgentInput"></a>

```csharp
public object ProvisionVmAgentInput { get; }
```

- *Type:* object

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `ComputerNamePrefix`<sup>Required</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.computerNamePrefix"></a>

```csharp
public string ComputerNamePrefix { get; }
```

- *Type:* string

---

##### `DisablePasswordAuthentication`<sup>Required</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.disablePasswordAuthentication"></a>

```csharp
public object DisablePasswordAuthentication { get; }
```

- *Type:* object

---

##### `PatchAssessmentMode`<sup>Required</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchAssessmentMode"></a>

```csharp
public string PatchAssessmentMode { get; }
```

- *Type:* string

---

##### `PatchMode`<sup>Required</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.patchMode"></a>

```csharp
public string PatchMode { get; }
```

- *Type:* string

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration</a>

---


### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.putCertificate"></a>

```csharp
private void PutCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.certificate"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.putLinuxConfiguration">PutLinuxConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.putWindowsConfiguration">PutWindowsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resetLinuxConfiguration">ResetLinuxConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resetWindowsConfiguration">ResetWindowsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxConfiguration` <a name="PutLinuxConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.putLinuxConfiguration"></a>

```csharp
private void PutLinuxConfiguration(OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.putLinuxConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration</a>

---

##### `PutWindowsConfiguration` <a name="PutWindowsConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.putWindowsConfiguration"></a>

```csharp
private void PutWindowsConfiguration(OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.putWindowsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration</a>

---

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resetCustomData"></a>

```csharp
private void ResetCustomData()
```

##### `ResetLinuxConfiguration` <a name="ResetLinuxConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resetLinuxConfiguration"></a>

```csharp
private void ResetLinuxConfiguration()
```

##### `ResetWindowsConfiguration` <a name="ResetWindowsConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.resetWindowsConfiguration"></a>

```csharp
private void ResetWindowsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.linuxConfiguration">LinuxConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.windowsConfiguration">WindowsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.customDataInput">CustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.linuxConfigurationInput">LinuxConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.windowsConfigurationInput">WindowsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.customData">CustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile">OrchestratedVirtualMachineScaleSetOsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxConfiguration`<sup>Required</sup> <a name="LinuxConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.linuxConfiguration"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference LinuxConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfigurationOutputReference</a>

---

##### `WindowsConfiguration`<sup>Required</sup> <a name="WindowsConfiguration" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.windowsConfiguration"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference WindowsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference</a>

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.customDataInput"></a>

```csharp
public string CustomDataInput { get; }
```

- *Type:* string

---

##### `LinuxConfigurationInput`<sup>Optional</sup> <a name="LinuxConfigurationInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.linuxConfigurationInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration LinuxConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration">OrchestratedVirtualMachineScaleSetOsProfileLinuxConfiguration</a>

---

##### `WindowsConfigurationInput`<sup>Optional</sup> <a name="WindowsConfigurationInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.windowsConfigurationInput"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration WindowsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration</a>

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.customData"></a>

```csharp
public string CustomData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfile">OrchestratedVirtualMachineScaleSetOsProfile</a>

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.settingInput">SettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.setting">Setting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.settingInput"></a>

```csharp
public string SettingInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.setting"></a>

```csharp
public string Setting { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putAdditionalUnattendContent">PutAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putWinrmListener">PutWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetAdditionalUnattendContent">ResetAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetComputerNamePrefix">ResetComputerNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetEnableAutomaticUpdates">ResetEnableAutomaticUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetHotpatchingEnabled">ResetHotpatchingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetPatchAssessmentMode">ResetPatchAssessmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetPatchMode">ResetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetProvisionVmAgent">ResetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetWinrmListener">ResetWinrmListener</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalUnattendContent` <a name="PutAdditionalUnattendContent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putAdditionalUnattendContent"></a>

```csharp
private void PutAdditionalUnattendContent(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* object

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putSecret.parameter.value"></a>

- *Type:* object

---

##### `PutWinrmListener` <a name="PutWinrmListener" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putWinrmListener"></a>

```csharp
private void PutWinrmListener(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.putWinrmListener.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalUnattendContent` <a name="ResetAdditionalUnattendContent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetAdditionalUnattendContent"></a>

```csharp
private void ResetAdditionalUnattendContent()
```

##### `ResetComputerNamePrefix` <a name="ResetComputerNamePrefix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetComputerNamePrefix"></a>

```csharp
private void ResetComputerNamePrefix()
```

##### `ResetEnableAutomaticUpdates` <a name="ResetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetEnableAutomaticUpdates"></a>

```csharp
private void ResetEnableAutomaticUpdates()
```

##### `ResetHotpatchingEnabled` <a name="ResetHotpatchingEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetHotpatchingEnabled"></a>

```csharp
private void ResetHotpatchingEnabled()
```

##### `ResetPatchAssessmentMode` <a name="ResetPatchAssessmentMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetPatchAssessmentMode"></a>

```csharp
private void ResetPatchAssessmentMode()
```

##### `ResetPatchMode` <a name="ResetPatchMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetPatchMode"></a>

```csharp
private void ResetPatchMode()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetProvisionVmAgent"></a>

```csharp
private void ResetProvisionVmAgent()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetWinrmListener` <a name="ResetWinrmListener" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.resetWinrmListener"></a>

```csharp
private void ResetWinrmListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.winrmListener">WinrmListener</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.additionalUnattendContentInput">AdditionalUnattendContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.computerNamePrefixInput">ComputerNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.enableAutomaticUpdatesInput">EnableAutomaticUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.hotpatchingEnabledInput">HotpatchingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchAssessmentModeInput">PatchAssessmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchModeInput">PatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.winrmListenerInput">WinrmListenerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.hotpatchingEnabled">HotpatchingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchMode">PatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalUnattendContent`<sup>Required</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.additionalUnattendContent"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList AdditionalUnattendContent { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationAdditionalUnattendContentList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.secret"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList</a>

---

##### `WinrmListener`<sup>Required</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.winrmListener"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList WinrmListener { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList</a>

---

##### `AdditionalUnattendContentInput`<sup>Optional</sup> <a name="AdditionalUnattendContentInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.additionalUnattendContentInput"></a>

```csharp
public object AdditionalUnattendContentInput { get; }
```

- *Type:* object

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `ComputerNamePrefixInput`<sup>Optional</sup> <a name="ComputerNamePrefixInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.computerNamePrefixInput"></a>

```csharp
public string ComputerNamePrefixInput { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpdatesInput`<sup>Optional</sup> <a name="EnableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.enableAutomaticUpdatesInput"></a>

```csharp
public object EnableAutomaticUpdatesInput { get; }
```

- *Type:* object

---

##### `HotpatchingEnabledInput`<sup>Optional</sup> <a name="HotpatchingEnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.hotpatchingEnabledInput"></a>

```csharp
public object HotpatchingEnabledInput { get; }
```

- *Type:* object

---

##### `PatchAssessmentModeInput`<sup>Optional</sup> <a name="PatchAssessmentModeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchAssessmentModeInput"></a>

```csharp
public string PatchAssessmentModeInput { get; }
```

- *Type:* string

---

##### `PatchModeInput`<sup>Optional</sup> <a name="PatchModeInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchModeInput"></a>

```csharp
public string PatchModeInput { get; }
```

- *Type:* string

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.provisionVmAgentInput"></a>

```csharp
public object ProvisionVmAgentInput { get; }
```

- *Type:* object

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `WinrmListenerInput`<sup>Optional</sup> <a name="WinrmListenerInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.winrmListenerInput"></a>

```csharp
public object WinrmListenerInput { get; }
```

- *Type:* object

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `ComputerNamePrefix`<sup>Required</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.computerNamePrefix"></a>

```csharp
public string ComputerNamePrefix { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpdates`<sup>Required</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.enableAutomaticUpdates"></a>

```csharp
public object EnableAutomaticUpdates { get; }
```

- *Type:* object

---

##### `HotpatchingEnabled`<sup>Required</sup> <a name="HotpatchingEnabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.hotpatchingEnabled"></a>

```csharp
public object HotpatchingEnabled { get; }
```

- *Type:* object

---

##### `PatchAssessmentMode`<sup>Required</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchAssessmentMode"></a>

```csharp
public string PatchAssessmentMode { get; }
```

- *Type:* string

---

##### `PatchMode`<sup>Required</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.patchMode"></a>

```csharp
public string PatchMode { get; }
```

- *Type:* string

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; }
```

- *Type:* object

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfiguration</a>

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.storeInput">StoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.store">Store</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StoreInput`<sup>Optional</sup> <a name="StoreInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.storeInput"></a>

```csharp
public string StoreInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.store"></a>

```csharp
public string Store { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.putCertificate"></a>

```csharp
private void PutCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.certificate"></a>

```csharp
public OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList">OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.get"></a>

```csharp
private OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference <a name="OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.resetCertificateUrl">ResetCertificateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.resetCertificateUrl"></a>

```csharp
private void ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.certificateUrlInput"></a>

```csharp
public string CertificateUrlInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetOsProfileWindowsConfigurationWinrmListenerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrchestratedVirtualMachineScaleSetPlanOutputReference <a name="OrchestratedVirtualMachineScaleSetPlanOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan">OrchestratedVirtualMachineScaleSetPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlanOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPlan InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPlan">OrchestratedVirtualMachineScaleSetPlan</a>

---


### OrchestratedVirtualMachineScaleSetPriorityMixOutputReference <a name="OrchestratedVirtualMachineScaleSetPriorityMixOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetPriorityMixOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.resetBaseRegularCount">ResetBaseRegularCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.resetRegularPercentageAboveBase">ResetRegularPercentageAboveBase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseRegularCount` <a name="ResetBaseRegularCount" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.resetBaseRegularCount"></a>

```csharp
private void ResetBaseRegularCount()
```

##### `ResetRegularPercentageAboveBase` <a name="ResetRegularPercentageAboveBase" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.resetRegularPercentageAboveBase"></a>

```csharp
private void ResetRegularPercentageAboveBase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.baseRegularCountInput">BaseRegularCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.regularPercentageAboveBaseInput">RegularPercentageAboveBaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.baseRegularCount">BaseRegularCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.regularPercentageAboveBase">RegularPercentageAboveBase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix">OrchestratedVirtualMachineScaleSetPriorityMix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseRegularCountInput`<sup>Optional</sup> <a name="BaseRegularCountInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.baseRegularCountInput"></a>

```csharp
public double BaseRegularCountInput { get; }
```

- *Type:* double

---

##### `RegularPercentageAboveBaseInput`<sup>Optional</sup> <a name="RegularPercentageAboveBaseInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.regularPercentageAboveBaseInput"></a>

```csharp
public double RegularPercentageAboveBaseInput { get; }
```

- *Type:* double

---

##### `BaseRegularCount`<sup>Required</sup> <a name="BaseRegularCount" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.baseRegularCount"></a>

```csharp
public double BaseRegularCount { get; }
```

- *Type:* double

---

##### `RegularPercentageAboveBase`<sup>Required</sup> <a name="RegularPercentageAboveBase" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.regularPercentageAboveBase"></a>

```csharp
public double RegularPercentageAboveBase { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMixOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetPriorityMix InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetPriorityMix">OrchestratedVirtualMachineScaleSetPriorityMix</a>

---


### OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference <a name="OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference">OrchestratedVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetSourceImageReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetSourceImageReference">OrchestratedVirtualMachineScaleSetSourceImageReference</a>

---


### OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference <a name="OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification">OrchestratedVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue"></a>

```csharp
public OrchestratedVirtualMachineScaleSetTerminationNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTerminationNotification">OrchestratedVirtualMachineScaleSetTerminationNotification</a>

---


### OrchestratedVirtualMachineScaleSetTimeoutsOutputReference <a name="OrchestratedVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrchestratedVirtualMachineScaleSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orchestratedVirtualMachineScaleSet.OrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



