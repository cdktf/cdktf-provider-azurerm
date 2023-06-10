# `azurerm_site_recovery_replicated_vm`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_replicated_vm`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm).

# `siteRecoveryReplicatedVm` Submodule <a name="`siteRecoveryReplicatedVm` Submodule" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryReplicatedVm <a name="SiteRecoveryReplicatedVm" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm azurerm_site_recovery_replicated_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVm(Construct Scope, string Id, SiteRecoveryReplicatedVmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig">SiteRecoveryReplicatedVmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig">SiteRecoveryReplicatedVmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putManagedDisk">PutManagedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putUnmanagedDisk">PutUnmanagedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetManagedDisk">ResetManagedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetMultiVmGroupName">ResetMultiVmGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetAvailabilitySetId">ResetTargetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetBootDiagnosticStorageAccountId">ResetTargetBootDiagnosticStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetCapacityReservationGroupId">ResetTargetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetEdgeZone">ResetTargetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetNetworkId">ResetTargetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetProximityPlacementGroupId">ResetTargetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetVirtualMachineScaleSetId">ResetTargetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetZone">ResetTargetZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTestNetworkId">ResetTestNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetUnmanagedDisk">ResetUnmanagedDisk</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutManagedDisk` <a name="PutManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putManagedDisk"></a>

```csharp
private void PutManagedDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putManagedDisk.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putTimeouts"></a>

```csharp
private void PutTimeouts(SiteRecoveryReplicatedVmTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts">SiteRecoveryReplicatedVmTimeouts</a>

---

##### `PutUnmanagedDisk` <a name="PutUnmanagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putUnmanagedDisk"></a>

```csharp
private void PutUnmanagedDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.putUnmanagedDisk.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedDisk` <a name="ResetManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetManagedDisk"></a>

```csharp
private void ResetManagedDisk()
```

##### `ResetMultiVmGroupName` <a name="ResetMultiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetMultiVmGroupName"></a>

```csharp
private void ResetMultiVmGroupName()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetTargetAvailabilitySetId` <a name="ResetTargetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetAvailabilitySetId"></a>

```csharp
private void ResetTargetAvailabilitySetId()
```

##### `ResetTargetBootDiagnosticStorageAccountId` <a name="ResetTargetBootDiagnosticStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetBootDiagnosticStorageAccountId"></a>

```csharp
private void ResetTargetBootDiagnosticStorageAccountId()
```

##### `ResetTargetCapacityReservationGroupId` <a name="ResetTargetCapacityReservationGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetCapacityReservationGroupId"></a>

```csharp
private void ResetTargetCapacityReservationGroupId()
```

##### `ResetTargetEdgeZone` <a name="ResetTargetEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetEdgeZone"></a>

```csharp
private void ResetTargetEdgeZone()
```

##### `ResetTargetNetworkId` <a name="ResetTargetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetNetworkId"></a>

```csharp
private void ResetTargetNetworkId()
```

##### `ResetTargetProximityPlacementGroupId` <a name="ResetTargetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetProximityPlacementGroupId"></a>

```csharp
private void ResetTargetProximityPlacementGroupId()
```

##### `ResetTargetVirtualMachineScaleSetId` <a name="ResetTargetVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetVirtualMachineScaleSetId"></a>

```csharp
private void ResetTargetVirtualMachineScaleSetId()
```

##### `ResetTargetZone` <a name="ResetTargetZone" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTargetZone"></a>

```csharp
private void ResetTargetZone()
```

##### `ResetTestNetworkId` <a name="ResetTestNetworkId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTestNetworkId"></a>

```csharp
private void ResetTestNetworkId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnmanagedDisk` <a name="ResetUnmanagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.resetUnmanagedDisk"></a>

```csharp
private void ResetUnmanagedDisk()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryReplicatedVm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryReplicatedVm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryReplicatedVm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.managedDisk">ManagedDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList">SiteRecoveryReplicatedVmManagedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList">SiteRecoveryReplicatedVmNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference">SiteRecoveryReplicatedVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.unmanagedDisk">UnmanagedDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList">SiteRecoveryReplicatedVmUnmanagedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.managedDiskInput">ManagedDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.multiVmGroupNameInput">MultiVmGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryReplicationPolicyIdInput">RecoveryReplicationPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryFabricNameInput">SourceRecoveryFabricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryProtectionContainerNameInput">SourceRecoveryProtectionContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceVmIdInput">SourceVmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetAvailabilitySetIdInput">TargetAvailabilitySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetBootDiagnosticStorageAccountIdInput">TargetBootDiagnosticStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetCapacityReservationGroupIdInput">TargetCapacityReservationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetEdgeZoneInput">TargetEdgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetNetworkIdInput">TargetNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetProximityPlacementGroupIdInput">TargetProximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryFabricIdInput">TargetRecoveryFabricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryProtectionContainerIdInput">TargetRecoveryProtectionContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetResourceGroupIdInput">TargetResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetVirtualMachineScaleSetIdInput">TargetVirtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetZoneInput">TargetZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.testNetworkIdInput">TestNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.unmanagedDiskInput">UnmanagedDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.multiVmGroupName">MultiVmGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryReplicationPolicyId">RecoveryReplicationPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryFabricName">SourceRecoveryFabricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryProtectionContainerName">SourceRecoveryProtectionContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceVmId">SourceVmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetAvailabilitySetId">TargetAvailabilitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetBootDiagnosticStorageAccountId">TargetBootDiagnosticStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetCapacityReservationGroupId">TargetCapacityReservationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetEdgeZone">TargetEdgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetNetworkId">TargetNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetProximityPlacementGroupId">TargetProximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryFabricId">TargetRecoveryFabricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryProtectionContainerId">TargetRecoveryProtectionContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetResourceGroupId">TargetResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetVirtualMachineScaleSetId">TargetVirtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetZone">TargetZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.testNetworkId">TestNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ManagedDisk`<sup>Required</sup> <a name="ManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.managedDisk"></a>

```csharp
public SiteRecoveryReplicatedVmManagedDiskList ManagedDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList">SiteRecoveryReplicatedVmManagedDiskList</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.networkInterface"></a>

```csharp
public SiteRecoveryReplicatedVmNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList">SiteRecoveryReplicatedVmNetworkInterfaceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.timeouts"></a>

```csharp
public SiteRecoveryReplicatedVmTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference">SiteRecoveryReplicatedVmTimeoutsOutputReference</a>

---

##### `UnmanagedDisk`<sup>Required</sup> <a name="UnmanagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.unmanagedDisk"></a>

```csharp
public SiteRecoveryReplicatedVmUnmanagedDiskList UnmanagedDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList">SiteRecoveryReplicatedVmUnmanagedDiskList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDiskInput`<sup>Optional</sup> <a name="ManagedDiskInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.managedDiskInput"></a>

```csharp
public object ManagedDiskInput { get; }
```

- *Type:* object

---

##### `MultiVmGroupNameInput`<sup>Optional</sup> <a name="MultiVmGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.multiVmGroupNameInput"></a>

```csharp
public string MultiVmGroupNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `RecoveryReplicationPolicyIdInput`<sup>Optional</sup> <a name="RecoveryReplicationPolicyIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryReplicationPolicyIdInput"></a>

```csharp
public string RecoveryReplicationPolicyIdInput { get; }
```

- *Type:* string

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryVaultNameInput"></a>

```csharp
public string RecoveryVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SourceRecoveryFabricNameInput`<sup>Optional</sup> <a name="SourceRecoveryFabricNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryFabricNameInput"></a>

```csharp
public string SourceRecoveryFabricNameInput { get; }
```

- *Type:* string

---

##### `SourceRecoveryProtectionContainerNameInput`<sup>Optional</sup> <a name="SourceRecoveryProtectionContainerNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryProtectionContainerNameInput"></a>

```csharp
public string SourceRecoveryProtectionContainerNameInput { get; }
```

- *Type:* string

---

##### `SourceVmIdInput`<sup>Optional</sup> <a name="SourceVmIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceVmIdInput"></a>

```csharp
public string SourceVmIdInput { get; }
```

- *Type:* string

---

##### `TargetAvailabilitySetIdInput`<sup>Optional</sup> <a name="TargetAvailabilitySetIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetAvailabilitySetIdInput"></a>

```csharp
public string TargetAvailabilitySetIdInput { get; }
```

- *Type:* string

---

##### `TargetBootDiagnosticStorageAccountIdInput`<sup>Optional</sup> <a name="TargetBootDiagnosticStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetBootDiagnosticStorageAccountIdInput"></a>

```csharp
public string TargetBootDiagnosticStorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TargetCapacityReservationGroupIdInput`<sup>Optional</sup> <a name="TargetCapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetCapacityReservationGroupIdInput"></a>

```csharp
public string TargetCapacityReservationGroupIdInput { get; }
```

- *Type:* string

---

##### `TargetEdgeZoneInput`<sup>Optional</sup> <a name="TargetEdgeZoneInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetEdgeZoneInput"></a>

```csharp
public string TargetEdgeZoneInput { get; }
```

- *Type:* string

---

##### `TargetNetworkIdInput`<sup>Optional</sup> <a name="TargetNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetNetworkIdInput"></a>

```csharp
public string TargetNetworkIdInput { get; }
```

- *Type:* string

---

##### `TargetProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="TargetProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetProximityPlacementGroupIdInput"></a>

```csharp
public string TargetProximityPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `TargetRecoveryFabricIdInput`<sup>Optional</sup> <a name="TargetRecoveryFabricIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryFabricIdInput"></a>

```csharp
public string TargetRecoveryFabricIdInput { get; }
```

- *Type:* string

---

##### `TargetRecoveryProtectionContainerIdInput`<sup>Optional</sup> <a name="TargetRecoveryProtectionContainerIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryProtectionContainerIdInput"></a>

```csharp
public string TargetRecoveryProtectionContainerIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceGroupIdInput`<sup>Optional</sup> <a name="TargetResourceGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetResourceGroupIdInput"></a>

```csharp
public string TargetResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `TargetVirtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="TargetVirtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetVirtualMachineScaleSetIdInput"></a>

```csharp
public string TargetVirtualMachineScaleSetIdInput { get; }
```

- *Type:* string

---

##### `TargetZoneInput`<sup>Optional</sup> <a name="TargetZoneInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetZoneInput"></a>

```csharp
public string TargetZoneInput { get; }
```

- *Type:* string

---

##### `TestNetworkIdInput`<sup>Optional</sup> <a name="TestNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.testNetworkIdInput"></a>

```csharp
public string TestNetworkIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnmanagedDiskInput`<sup>Optional</sup> <a name="UnmanagedDiskInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.unmanagedDiskInput"></a>

```csharp
public object UnmanagedDiskInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiVmGroupName`<sup>Required</sup> <a name="MultiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.multiVmGroupName"></a>

```csharp
public string MultiVmGroupName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecoveryReplicationPolicyId`<sup>Required</sup> <a name="RecoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryReplicationPolicyId"></a>

```csharp
public string RecoveryReplicationPolicyId { get; }
```

- *Type:* string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SourceRecoveryFabricName`<sup>Required</sup> <a name="SourceRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryFabricName"></a>

```csharp
public string SourceRecoveryFabricName { get; }
```

- *Type:* string

---

##### `SourceRecoveryProtectionContainerName`<sup>Required</sup> <a name="SourceRecoveryProtectionContainerName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceRecoveryProtectionContainerName"></a>

```csharp
public string SourceRecoveryProtectionContainerName { get; }
```

- *Type:* string

---

##### `SourceVmId`<sup>Required</sup> <a name="SourceVmId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.sourceVmId"></a>

```csharp
public string SourceVmId { get; }
```

- *Type:* string

---

##### `TargetAvailabilitySetId`<sup>Required</sup> <a name="TargetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetAvailabilitySetId"></a>

```csharp
public string TargetAvailabilitySetId { get; }
```

- *Type:* string

---

##### `TargetBootDiagnosticStorageAccountId`<sup>Required</sup> <a name="TargetBootDiagnosticStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetBootDiagnosticStorageAccountId"></a>

```csharp
public string TargetBootDiagnosticStorageAccountId { get; }
```

- *Type:* string

---

##### `TargetCapacityReservationGroupId`<sup>Required</sup> <a name="TargetCapacityReservationGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetCapacityReservationGroupId"></a>

```csharp
public string TargetCapacityReservationGroupId { get; }
```

- *Type:* string

---

##### `TargetEdgeZone`<sup>Required</sup> <a name="TargetEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetEdgeZone"></a>

```csharp
public string TargetEdgeZone { get; }
```

- *Type:* string

---

##### `TargetNetworkId`<sup>Required</sup> <a name="TargetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetNetworkId"></a>

```csharp
public string TargetNetworkId { get; }
```

- *Type:* string

---

##### `TargetProximityPlacementGroupId`<sup>Required</sup> <a name="TargetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetProximityPlacementGroupId"></a>

```csharp
public string TargetProximityPlacementGroupId { get; }
```

- *Type:* string

---

##### `TargetRecoveryFabricId`<sup>Required</sup> <a name="TargetRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryFabricId"></a>

```csharp
public string TargetRecoveryFabricId { get; }
```

- *Type:* string

---

##### `TargetRecoveryProtectionContainerId`<sup>Required</sup> <a name="TargetRecoveryProtectionContainerId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetRecoveryProtectionContainerId"></a>

```csharp
public string TargetRecoveryProtectionContainerId { get; }
```

- *Type:* string

---

##### `TargetResourceGroupId`<sup>Required</sup> <a name="TargetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetResourceGroupId"></a>

```csharp
public string TargetResourceGroupId { get; }
```

- *Type:* string

---

##### `TargetVirtualMachineScaleSetId`<sup>Required</sup> <a name="TargetVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetVirtualMachineScaleSetId"></a>

```csharp
public string TargetVirtualMachineScaleSetId { get; }
```

- *Type:* string

---

##### `TargetZone`<sup>Required</sup> <a name="TargetZone" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.targetZone"></a>

```csharp
public string TargetZone { get; }
```

- *Type:* string

---

##### `TestNetworkId`<sup>Required</sup> <a name="TestNetworkId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.testNetworkId"></a>

```csharp
public string TestNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryReplicatedVmConfig <a name="SiteRecoveryReplicatedVmConfig" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RecoveryReplicationPolicyId,
    string RecoveryVaultName,
    string ResourceGroupName,
    string SourceRecoveryFabricName,
    string SourceRecoveryProtectionContainerName,
    string SourceVmId,
    string TargetRecoveryFabricId,
    string TargetRecoveryProtectionContainerId,
    string TargetResourceGroupId,
    string Id = null,
    object ManagedDisk = null,
    string MultiVmGroupName = null,
    object NetworkInterface = null,
    string TargetAvailabilitySetId = null,
    string TargetBootDiagnosticStorageAccountId = null,
    string TargetCapacityReservationGroupId = null,
    string TargetEdgeZone = null,
    string TargetNetworkId = null,
    string TargetProximityPlacementGroupId = null,
    string TargetVirtualMachineScaleSetId = null,
    string TargetZone = null,
    string TestNetworkId = null,
    SiteRecoveryReplicatedVmTimeouts Timeouts = null,
    object UnmanagedDisk = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#name SiteRecoveryReplicatedVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.recoveryReplicationPolicyId">RecoveryReplicationPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#recovery_replication_policy_id SiteRecoveryReplicatedVm#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#recovery_vault_name SiteRecoveryReplicatedVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#resource_group_name SiteRecoveryReplicatedVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.sourceRecoveryFabricName">SourceRecoveryFabricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_recovery_fabric_name SiteRecoveryReplicatedVm#source_recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.sourceRecoveryProtectionContainerName">SourceRecoveryProtectionContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_recovery_protection_container_name SiteRecoveryReplicatedVm#source_recovery_protection_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.sourceVmId">SourceVmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_vm_id SiteRecoveryReplicatedVm#source_vm_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetRecoveryFabricId">TargetRecoveryFabricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_recovery_fabric_id SiteRecoveryReplicatedVm#target_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetRecoveryProtectionContainerId">TargetRecoveryProtectionContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_recovery_protection_container_id SiteRecoveryReplicatedVm#target_recovery_protection_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetResourceGroupId">TargetResourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#id SiteRecoveryReplicatedVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.managedDisk">ManagedDisk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#managed_disk SiteRecoveryReplicatedVm#managed_disk}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.multiVmGroupName">MultiVmGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#multi_vm_group_name SiteRecoveryReplicatedVm#multi_vm_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#network_interface SiteRecoveryReplicatedVm#network_interface}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetAvailabilitySetId">TargetAvailabilitySetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_availability_set_id SiteRecoveryReplicatedVm#target_availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetBootDiagnosticStorageAccountId">TargetBootDiagnosticStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_boot_diagnostic_storage_account_id SiteRecoveryReplicatedVm#target_boot_diagnostic_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetCapacityReservationGroupId">TargetCapacityReservationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_capacity_reservation_group_id SiteRecoveryReplicatedVm#target_capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetEdgeZone">TargetEdgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_edge_zone SiteRecoveryReplicatedVm#target_edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetNetworkId">TargetNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_network_id SiteRecoveryReplicatedVm#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetProximityPlacementGroupId">TargetProximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_proximity_placement_group_id SiteRecoveryReplicatedVm#target_proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetVirtualMachineScaleSetId">TargetVirtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_virtual_machine_scale_set_id SiteRecoveryReplicatedVm#target_virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetZone">TargetZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_zone SiteRecoveryReplicatedVm#target_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.testNetworkId">TestNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#test_network_id SiteRecoveryReplicatedVm#test_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts">SiteRecoveryReplicatedVmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.unmanagedDisk">UnmanagedDisk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#unmanaged_disk SiteRecoveryReplicatedVm#unmanaged_disk}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#name SiteRecoveryReplicatedVm#name}.

---

##### `RecoveryReplicationPolicyId`<sup>Required</sup> <a name="RecoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.recoveryReplicationPolicyId"></a>

```csharp
public string RecoveryReplicationPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#recovery_replication_policy_id SiteRecoveryReplicatedVm#recovery_replication_policy_id}.

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#recovery_vault_name SiteRecoveryReplicatedVm#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#resource_group_name SiteRecoveryReplicatedVm#resource_group_name}.

---

##### `SourceRecoveryFabricName`<sup>Required</sup> <a name="SourceRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.sourceRecoveryFabricName"></a>

```csharp
public string SourceRecoveryFabricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_recovery_fabric_name SiteRecoveryReplicatedVm#source_recovery_fabric_name}.

---

##### `SourceRecoveryProtectionContainerName`<sup>Required</sup> <a name="SourceRecoveryProtectionContainerName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.sourceRecoveryProtectionContainerName"></a>

```csharp
public string SourceRecoveryProtectionContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_recovery_protection_container_name SiteRecoveryReplicatedVm#source_recovery_protection_container_name}.

---

##### `SourceVmId`<sup>Required</sup> <a name="SourceVmId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.sourceVmId"></a>

```csharp
public string SourceVmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_vm_id SiteRecoveryReplicatedVm#source_vm_id}.

---

##### `TargetRecoveryFabricId`<sup>Required</sup> <a name="TargetRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetRecoveryFabricId"></a>

```csharp
public string TargetRecoveryFabricId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_recovery_fabric_id SiteRecoveryReplicatedVm#target_recovery_fabric_id}.

---

##### `TargetRecoveryProtectionContainerId`<sup>Required</sup> <a name="TargetRecoveryProtectionContainerId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetRecoveryProtectionContainerId"></a>

```csharp
public string TargetRecoveryProtectionContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_recovery_protection_container_id SiteRecoveryReplicatedVm#target_recovery_protection_container_id}.

---

##### `TargetResourceGroupId`<sup>Required</sup> <a name="TargetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetResourceGroupId"></a>

```csharp
public string TargetResourceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#id SiteRecoveryReplicatedVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedDisk`<sup>Optional</sup> <a name="ManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.managedDisk"></a>

```csharp
public object ManagedDisk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#managed_disk SiteRecoveryReplicatedVm#managed_disk}.

---

##### `MultiVmGroupName`<sup>Optional</sup> <a name="MultiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.multiVmGroupName"></a>

```csharp
public string MultiVmGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#multi_vm_group_name SiteRecoveryReplicatedVm#multi_vm_group_name}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#network_interface SiteRecoveryReplicatedVm#network_interface}.

---

##### `TargetAvailabilitySetId`<sup>Optional</sup> <a name="TargetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetAvailabilitySetId"></a>

```csharp
public string TargetAvailabilitySetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_availability_set_id SiteRecoveryReplicatedVm#target_availability_set_id}.

---

##### `TargetBootDiagnosticStorageAccountId`<sup>Optional</sup> <a name="TargetBootDiagnosticStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetBootDiagnosticStorageAccountId"></a>

```csharp
public string TargetBootDiagnosticStorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_boot_diagnostic_storage_account_id SiteRecoveryReplicatedVm#target_boot_diagnostic_storage_account_id}.

---

##### `TargetCapacityReservationGroupId`<sup>Optional</sup> <a name="TargetCapacityReservationGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetCapacityReservationGroupId"></a>

```csharp
public string TargetCapacityReservationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_capacity_reservation_group_id SiteRecoveryReplicatedVm#target_capacity_reservation_group_id}.

---

##### `TargetEdgeZone`<sup>Optional</sup> <a name="TargetEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetEdgeZone"></a>

```csharp
public string TargetEdgeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_edge_zone SiteRecoveryReplicatedVm#target_edge_zone}.

---

##### `TargetNetworkId`<sup>Optional</sup> <a name="TargetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetNetworkId"></a>

```csharp
public string TargetNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_network_id SiteRecoveryReplicatedVm#target_network_id}.

---

##### `TargetProximityPlacementGroupId`<sup>Optional</sup> <a name="TargetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetProximityPlacementGroupId"></a>

```csharp
public string TargetProximityPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_proximity_placement_group_id SiteRecoveryReplicatedVm#target_proximity_placement_group_id}.

---

##### `TargetVirtualMachineScaleSetId`<sup>Optional</sup> <a name="TargetVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetVirtualMachineScaleSetId"></a>

```csharp
public string TargetVirtualMachineScaleSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_virtual_machine_scale_set_id SiteRecoveryReplicatedVm#target_virtual_machine_scale_set_id}.

---

##### `TargetZone`<sup>Optional</sup> <a name="TargetZone" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.targetZone"></a>

```csharp
public string TargetZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_zone SiteRecoveryReplicatedVm#target_zone}.

---

##### `TestNetworkId`<sup>Optional</sup> <a name="TestNetworkId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.testNetworkId"></a>

```csharp
public string TestNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#test_network_id SiteRecoveryReplicatedVm#test_network_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.timeouts"></a>

```csharp
public SiteRecoveryReplicatedVmTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts">SiteRecoveryReplicatedVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#timeouts SiteRecoveryReplicatedVm#timeouts}

---

##### `UnmanagedDisk`<sup>Optional</sup> <a name="UnmanagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmConfig.property.unmanagedDisk"></a>

```csharp
public object UnmanagedDisk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#unmanaged_disk SiteRecoveryReplicatedVm#unmanaged_disk}.

---

### SiteRecoveryReplicatedVmManagedDisk <a name="SiteRecoveryReplicatedVmManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDisk {
    string DiskId = null,
    string StagingStorageAccountId = null,
    object TargetDiskEncryption = null,
    string TargetDiskEncryptionSetId = null,
    string TargetDiskType = null,
    string TargetReplicaDiskType = null,
    string TargetResourceGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.diskId">DiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#disk_id SiteRecoveryReplicatedVm#disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.stagingStorageAccountId">StagingStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#staging_storage_account_id SiteRecoveryReplicatedVm#staging_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetDiskEncryption">TargetDiskEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_disk_encryption SiteRecoveryReplicatedVm#target_disk_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetDiskEncryptionSetId">TargetDiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_disk_encryption_set_id SiteRecoveryReplicatedVm#target_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetDiskType">TargetDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_disk_type SiteRecoveryReplicatedVm#target_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetReplicaDiskType">TargetReplicaDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_replica_disk_type SiteRecoveryReplicatedVm#target_replica_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetResourceGroupId">TargetResourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}. |

---

##### `DiskId`<sup>Optional</sup> <a name="DiskId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.diskId"></a>

```csharp
public string DiskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#disk_id SiteRecoveryReplicatedVm#disk_id}.

---

##### `StagingStorageAccountId`<sup>Optional</sup> <a name="StagingStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.stagingStorageAccountId"></a>

```csharp
public string StagingStorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#staging_storage_account_id SiteRecoveryReplicatedVm#staging_storage_account_id}.

---

##### `TargetDiskEncryption`<sup>Optional</sup> <a name="TargetDiskEncryption" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetDiskEncryption"></a>

```csharp
public object TargetDiskEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_disk_encryption SiteRecoveryReplicatedVm#target_disk_encryption}.

---

##### `TargetDiskEncryptionSetId`<sup>Optional</sup> <a name="TargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetDiskEncryptionSetId"></a>

```csharp
public string TargetDiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_disk_encryption_set_id SiteRecoveryReplicatedVm#target_disk_encryption_set_id}.

---

##### `TargetDiskType`<sup>Optional</sup> <a name="TargetDiskType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetDiskType"></a>

```csharp
public string TargetDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_disk_type SiteRecoveryReplicatedVm#target_disk_type}.

---

##### `TargetReplicaDiskType`<sup>Optional</sup> <a name="TargetReplicaDiskType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetReplicaDiskType"></a>

```csharp
public string TargetReplicaDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_replica_disk_type SiteRecoveryReplicatedVm#target_replica_disk_type}.

---

##### `TargetResourceGroupId`<sup>Optional</sup> <a name="TargetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDisk.property.targetResourceGroupId"></a>

```csharp
public string TargetResourceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}.

---

### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption {
    object DiskEncryptionKey = null,
    object KeyEncryptionKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#disk_encryption_key SiteRecoveryReplicatedVm#disk_encryption_key}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption.property.keyEncryptionKey">KeyEncryptionKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#key_encryption_key SiteRecoveryReplicatedVm#key_encryption_key}. |

---

##### `DiskEncryptionKey`<sup>Optional</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption.property.diskEncryptionKey"></a>

```csharp
public object DiskEncryptionKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#disk_encryption_key SiteRecoveryReplicatedVm#disk_encryption_key}.

---

##### `KeyEncryptionKey`<sup>Optional</sup> <a name="KeyEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption.property.keyEncryptionKey"></a>

```csharp
public object KeyEncryptionKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#key_encryption_key SiteRecoveryReplicatedVm#key_encryption_key}.

---

### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey {
    string SecretUrl = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey.property.secretUrl">SecretUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#secret_url SiteRecoveryReplicatedVm#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#vault_id SiteRecoveryReplicatedVm#vault_id}. |

---

##### `SecretUrl`<sup>Optional</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey.property.secretUrl"></a>

```csharp
public string SecretUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#secret_url SiteRecoveryReplicatedVm#secret_url}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#vault_id SiteRecoveryReplicatedVm#vault_id}.

---

### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey {
    string KeyUrl = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey.property.keyUrl">KeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#key_url SiteRecoveryReplicatedVm#key_url}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#vault_id SiteRecoveryReplicatedVm#vault_id}. |

---

##### `KeyUrl`<sup>Optional</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey.property.keyUrl"></a>

```csharp
public string KeyUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#key_url SiteRecoveryReplicatedVm#key_url}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#vault_id SiteRecoveryReplicatedVm#vault_id}.

---

### SiteRecoveryReplicatedVmNetworkInterface <a name="SiteRecoveryReplicatedVmNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmNetworkInterface {
    string FailoverTestPublicIpAddressId = null,
    string FailoverTestStaticIp = null,
    string FailoverTestSubnetName = null,
    object IsPrimary = null,
    string RecoveryPublicIpAddressId = null,
    string SourceNetworkInterfaceId = null,
    string TargetStaticIp = null,
    string TargetSubnetName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.failoverTestPublicIpAddressId">FailoverTestPublicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#failover_test_public_ip_address_id SiteRecoveryReplicatedVm#failover_test_public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.failoverTestStaticIp">FailoverTestStaticIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#failover_test_static_ip SiteRecoveryReplicatedVm#failover_test_static_ip}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.failoverTestSubnetName">FailoverTestSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#failover_test_subnet_name SiteRecoveryReplicatedVm#failover_test_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.isPrimary">IsPrimary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#is_primary SiteRecoveryReplicatedVm#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.recoveryPublicIpAddressId">RecoveryPublicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#recovery_public_ip_address_id SiteRecoveryReplicatedVm#recovery_public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.sourceNetworkInterfaceId">SourceNetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_network_interface_id SiteRecoveryReplicatedVm#source_network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.targetStaticIp">TargetStaticIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_static_ip SiteRecoveryReplicatedVm#target_static_ip}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.targetSubnetName">TargetSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_subnet_name SiteRecoveryReplicatedVm#target_subnet_name}. |

---

##### `FailoverTestPublicIpAddressId`<sup>Optional</sup> <a name="FailoverTestPublicIpAddressId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.failoverTestPublicIpAddressId"></a>

```csharp
public string FailoverTestPublicIpAddressId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#failover_test_public_ip_address_id SiteRecoveryReplicatedVm#failover_test_public_ip_address_id}.

---

##### `FailoverTestStaticIp`<sup>Optional</sup> <a name="FailoverTestStaticIp" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.failoverTestStaticIp"></a>

```csharp
public string FailoverTestStaticIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#failover_test_static_ip SiteRecoveryReplicatedVm#failover_test_static_ip}.

---

##### `FailoverTestSubnetName`<sup>Optional</sup> <a name="FailoverTestSubnetName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.failoverTestSubnetName"></a>

```csharp
public string FailoverTestSubnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#failover_test_subnet_name SiteRecoveryReplicatedVm#failover_test_subnet_name}.

---

##### `IsPrimary`<sup>Optional</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.isPrimary"></a>

```csharp
public object IsPrimary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#is_primary SiteRecoveryReplicatedVm#is_primary}.

---

##### `RecoveryPublicIpAddressId`<sup>Optional</sup> <a name="RecoveryPublicIpAddressId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.recoveryPublicIpAddressId"></a>

```csharp
public string RecoveryPublicIpAddressId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#recovery_public_ip_address_id SiteRecoveryReplicatedVm#recovery_public_ip_address_id}.

---

##### `SourceNetworkInterfaceId`<sup>Optional</sup> <a name="SourceNetworkInterfaceId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.sourceNetworkInterfaceId"></a>

```csharp
public string SourceNetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#source_network_interface_id SiteRecoveryReplicatedVm#source_network_interface_id}.

---

##### `TargetStaticIp`<sup>Optional</sup> <a name="TargetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.targetStaticIp"></a>

```csharp
public string TargetStaticIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_static_ip SiteRecoveryReplicatedVm#target_static_ip}.

---

##### `TargetSubnetName`<sup>Optional</sup> <a name="TargetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterface.property.targetSubnetName"></a>

```csharp
public string TargetSubnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_subnet_name SiteRecoveryReplicatedVm#target_subnet_name}.

---

### SiteRecoveryReplicatedVmTimeouts <a name="SiteRecoveryReplicatedVmTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#create SiteRecoveryReplicatedVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#delete SiteRecoveryReplicatedVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#read SiteRecoveryReplicatedVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#update SiteRecoveryReplicatedVm#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#create SiteRecoveryReplicatedVm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#delete SiteRecoveryReplicatedVm#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#read SiteRecoveryReplicatedVm#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#update SiteRecoveryReplicatedVm#update}.

---

### SiteRecoveryReplicatedVmUnmanagedDisk <a name="SiteRecoveryReplicatedVmUnmanagedDisk" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmUnmanagedDisk {
    string DiskUri = null,
    string StagingStorageAccountId = null,
    string TargetStorageAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk.property.diskUri">DiskUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#disk_uri SiteRecoveryReplicatedVm#disk_uri}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk.property.stagingStorageAccountId">StagingStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#staging_storage_account_id SiteRecoveryReplicatedVm#staging_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk.property.targetStorageAccountId">TargetStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_storage_account_id SiteRecoveryReplicatedVm#target_storage_account_id}. |

---

##### `DiskUri`<sup>Optional</sup> <a name="DiskUri" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk.property.diskUri"></a>

```csharp
public string DiskUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#disk_uri SiteRecoveryReplicatedVm#disk_uri}.

---

##### `StagingStorageAccountId`<sup>Optional</sup> <a name="StagingStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk.property.stagingStorageAccountId"></a>

```csharp
public string StagingStorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#staging_storage_account_id SiteRecoveryReplicatedVm#staging_storage_account_id}.

---

##### `TargetStorageAccountId`<sup>Optional</sup> <a name="TargetStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDisk.property.targetStorageAccountId"></a>

```csharp
public string TargetStorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/site_recovery_replicated_vm#target_storage_account_id SiteRecoveryReplicatedVm#target_storage_account_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryReplicatedVmManagedDiskList <a name="SiteRecoveryReplicatedVmManagedDiskList" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.get"></a>

```csharp
private SiteRecoveryReplicatedVmManagedDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmManagedDiskOutputReference <a name="SiteRecoveryReplicatedVmManagedDiskOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.putTargetDiskEncryption">PutTargetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetDiskId">ResetDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetStagingStorageAccountId">ResetStagingStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryption">ResetTargetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId">ResetTargetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetDiskType">ResetTargetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetReplicaDiskType">ResetTargetReplicaDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetResourceGroupId">ResetTargetResourceGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetDiskEncryption` <a name="PutTargetDiskEncryption" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.putTargetDiskEncryption"></a>

```csharp
private void PutTargetDiskEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.putTargetDiskEncryption.parameter.value"></a>

- *Type:* object

---

##### `ResetDiskId` <a name="ResetDiskId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetDiskId"></a>

```csharp
private void ResetDiskId()
```

##### `ResetStagingStorageAccountId` <a name="ResetStagingStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetStagingStorageAccountId"></a>

```csharp
private void ResetStagingStorageAccountId()
```

##### `ResetTargetDiskEncryption` <a name="ResetTargetDiskEncryption" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryption"></a>

```csharp
private void ResetTargetDiskEncryption()
```

##### `ResetTargetDiskEncryptionSetId` <a name="ResetTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId"></a>

```csharp
private void ResetTargetDiskEncryptionSetId()
```

##### `ResetTargetDiskType` <a name="ResetTargetDiskType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetDiskType"></a>

```csharp
private void ResetTargetDiskType()
```

##### `ResetTargetReplicaDiskType` <a name="ResetTargetReplicaDiskType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetReplicaDiskType"></a>

```csharp
private void ResetTargetReplicaDiskType()
```

##### `ResetTargetResourceGroupId` <a name="ResetTargetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.resetTargetResourceGroupId"></a>

```csharp
private void ResetTargetResourceGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryption">TargetDiskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList">SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.diskIdInput">DiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.stagingStorageAccountIdInput">StagingStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionInput">TargetDiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput">TargetDiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput">TargetDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetReplicaDiskTypeInput">TargetReplicaDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetResourceGroupIdInput">TargetResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.diskId">DiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.stagingStorageAccountId">StagingStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId">TargetDiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskType">TargetDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetReplicaDiskType">TargetReplicaDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetResourceGroupId">TargetResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetDiskEncryption`<sup>Required</sup> <a name="TargetDiskEncryption" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryption"></a>

```csharp
public SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList TargetDiskEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList">SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList</a>

---

##### `DiskIdInput`<sup>Optional</sup> <a name="DiskIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.diskIdInput"></a>

```csharp
public string DiskIdInput { get; }
```

- *Type:* string

---

##### `StagingStorageAccountIdInput`<sup>Optional</sup> <a name="StagingStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.stagingStorageAccountIdInput"></a>

```csharp
public string StagingStorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TargetDiskEncryptionInput`<sup>Optional</sup> <a name="TargetDiskEncryptionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionInput"></a>

```csharp
public object TargetDiskEncryptionInput { get; }
```

- *Type:* object

---

##### `TargetDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="TargetDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput"></a>

```csharp
public string TargetDiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `TargetDiskTypeInput`<sup>Optional</sup> <a name="TargetDiskTypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput"></a>

```csharp
public string TargetDiskTypeInput { get; }
```

- *Type:* string

---

##### `TargetReplicaDiskTypeInput`<sup>Optional</sup> <a name="TargetReplicaDiskTypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetReplicaDiskTypeInput"></a>

```csharp
public string TargetReplicaDiskTypeInput { get; }
```

- *Type:* string

---

##### `TargetResourceGroupIdInput`<sup>Optional</sup> <a name="TargetResourceGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetResourceGroupIdInput"></a>

```csharp
public string TargetResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.diskId"></a>

```csharp
public string DiskId { get; }
```

- *Type:* string

---

##### `StagingStorageAccountId`<sup>Required</sup> <a name="StagingStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.stagingStorageAccountId"></a>

```csharp
public string StagingStorageAccountId { get; }
```

- *Type:* string

---

##### `TargetDiskEncryptionSetId`<sup>Required</sup> <a name="TargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId"></a>

```csharp
public string TargetDiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `TargetDiskType`<sup>Required</sup> <a name="TargetDiskType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetDiskType"></a>

```csharp
public string TargetDiskType { get; }
```

- *Type:* string

---

##### `TargetReplicaDiskType`<sup>Required</sup> <a name="TargetReplicaDiskType" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetReplicaDiskType"></a>

```csharp
public string TargetReplicaDiskType { get; }
```

- *Type:* string

---

##### `TargetResourceGroupId`<sup>Required</sup> <a name="TargetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.targetResourceGroupId"></a>

```csharp
public string TargetResourceGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.get"></a>

```csharp
private SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.resetSecretUrl">ResetSecretUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretUrl` <a name="ResetSecretUrl" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.resetSecretUrl"></a>

```csharp
private void ResetSecretUrl()
```

##### `ResetVaultId` <a name="ResetVaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.resetVaultId"></a>

```csharp
private void ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrlInput">SecretUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrl">SecretUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretUrlInput`<sup>Optional</sup> <a name="SecretUrlInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrlInput"></a>

```csharp
public string SecretUrlInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.secretUrl"></a>

```csharp
public string SecretUrl { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.get"></a>

```csharp
private SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.resetKeyUrl">ResetKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyUrl` <a name="ResetKeyUrl" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.resetKeyUrl"></a>

```csharp
private void ResetKeyUrl()
```

##### `ResetVaultId` <a name="ResetVaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.resetVaultId"></a>

```csharp
private void ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrlInput">KeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrl">KeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyUrlInput`<sup>Optional</sup> <a name="KeyUrlInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrlInput"></a>

```csharp
public string KeyUrlInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.keyUrl"></a>

```csharp
public string KeyUrl { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.get"></a>

```csharp
private SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference <a name="SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.putDiskEncryptionKey">PutDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.putKeyEncryptionKey">PutKeyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.resetDiskEncryptionKey">ResetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.resetKeyEncryptionKey">ResetKeyEncryptionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskEncryptionKey` <a name="PutDiskEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.putDiskEncryptionKey"></a>

```csharp
private void PutDiskEncryptionKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* object

---

##### `PutKeyEncryptionKey` <a name="PutKeyEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.putKeyEncryptionKey"></a>

```csharp
private void PutKeyEncryptionKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.putKeyEncryptionKey.parameter.value"></a>

- *Type:* object

---

##### `ResetDiskEncryptionKey` <a name="ResetDiskEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.resetDiskEncryptionKey"></a>

```csharp
private void ResetDiskEncryptionKey()
```

##### `ResetKeyEncryptionKey` <a name="ResetKeyEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.resetKeyEncryptionKey"></a>

```csharp
private void ResetKeyEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList">SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.keyEncryptionKey">KeyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList">SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.diskEncryptionKeyInput">DiskEncryptionKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.keyEncryptionKeyInput">KeyEncryptionKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.diskEncryptionKey"></a>

```csharp
public SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList DiskEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList">SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList</a>

---

##### `KeyEncryptionKey`<sup>Required</sup> <a name="KeyEncryptionKey" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.keyEncryptionKey"></a>

```csharp
public SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList KeyEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList">SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList</a>

---

##### `DiskEncryptionKeyInput`<sup>Optional</sup> <a name="DiskEncryptionKeyInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.diskEncryptionKeyInput"></a>

```csharp
public object DiskEncryptionKeyInput { get; }
```

- *Type:* object

---

##### `KeyEncryptionKeyInput`<sup>Optional</sup> <a name="KeyEncryptionKeyInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.keyEncryptionKeyInput"></a>

```csharp
public object KeyEncryptionKeyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmNetworkInterfaceList <a name="SiteRecoveryReplicatedVmNetworkInterfaceList" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.get"></a>

```csharp
private SiteRecoveryReplicatedVmNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmNetworkInterfaceOutputReference <a name="SiteRecoveryReplicatedVmNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetFailoverTestPublicIpAddressId">ResetFailoverTestPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetFailoverTestStaticIp">ResetFailoverTestStaticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetFailoverTestSubnetName">ResetFailoverTestSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetIsPrimary">ResetIsPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetRecoveryPublicIpAddressId">ResetRecoveryPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetSourceNetworkInterfaceId">ResetSourceNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp">ResetTargetStaticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName">ResetTargetSubnetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailoverTestPublicIpAddressId` <a name="ResetFailoverTestPublicIpAddressId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetFailoverTestPublicIpAddressId"></a>

```csharp
private void ResetFailoverTestPublicIpAddressId()
```

##### `ResetFailoverTestStaticIp` <a name="ResetFailoverTestStaticIp" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetFailoverTestStaticIp"></a>

```csharp
private void ResetFailoverTestStaticIp()
```

##### `ResetFailoverTestSubnetName` <a name="ResetFailoverTestSubnetName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetFailoverTestSubnetName"></a>

```csharp
private void ResetFailoverTestSubnetName()
```

##### `ResetIsPrimary` <a name="ResetIsPrimary" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetIsPrimary"></a>

```csharp
private void ResetIsPrimary()
```

##### `ResetRecoveryPublicIpAddressId` <a name="ResetRecoveryPublicIpAddressId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetRecoveryPublicIpAddressId"></a>

```csharp
private void ResetRecoveryPublicIpAddressId()
```

##### `ResetSourceNetworkInterfaceId` <a name="ResetSourceNetworkInterfaceId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetSourceNetworkInterfaceId"></a>

```csharp
private void ResetSourceNetworkInterfaceId()
```

##### `ResetTargetStaticIp` <a name="ResetTargetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp"></a>

```csharp
private void ResetTargetStaticIp()
```

##### `ResetTargetSubnetName` <a name="ResetTargetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName"></a>

```csharp
private void ResetTargetSubnetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestPublicIpAddressIdInput">FailoverTestPublicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestStaticIpInput">FailoverTestStaticIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestSubnetNameInput">FailoverTestSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.recoveryPublicIpAddressIdInput">RecoveryPublicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.sourceNetworkInterfaceIdInput">SourceNetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput">TargetStaticIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput">TargetSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestPublicIpAddressId">FailoverTestPublicIpAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestStaticIp">FailoverTestStaticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestSubnetName">FailoverTestSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.isPrimary">IsPrimary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.recoveryPublicIpAddressId">RecoveryPublicIpAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.sourceNetworkInterfaceId">SourceNetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp">TargetStaticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName">TargetSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverTestPublicIpAddressIdInput`<sup>Optional</sup> <a name="FailoverTestPublicIpAddressIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestPublicIpAddressIdInput"></a>

```csharp
public string FailoverTestPublicIpAddressIdInput { get; }
```

- *Type:* string

---

##### `FailoverTestStaticIpInput`<sup>Optional</sup> <a name="FailoverTestStaticIpInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestStaticIpInput"></a>

```csharp
public string FailoverTestStaticIpInput { get; }
```

- *Type:* string

---

##### `FailoverTestSubnetNameInput`<sup>Optional</sup> <a name="FailoverTestSubnetNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestSubnetNameInput"></a>

```csharp
public string FailoverTestSubnetNameInput { get; }
```

- *Type:* string

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```csharp
public object IsPrimaryInput { get; }
```

- *Type:* object

---

##### `RecoveryPublicIpAddressIdInput`<sup>Optional</sup> <a name="RecoveryPublicIpAddressIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.recoveryPublicIpAddressIdInput"></a>

```csharp
public string RecoveryPublicIpAddressIdInput { get; }
```

- *Type:* string

---

##### `SourceNetworkInterfaceIdInput`<sup>Optional</sup> <a name="SourceNetworkInterfaceIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.sourceNetworkInterfaceIdInput"></a>

```csharp
public string SourceNetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `TargetStaticIpInput`<sup>Optional</sup> <a name="TargetStaticIpInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput"></a>

```csharp
public string TargetStaticIpInput { get; }
```

- *Type:* string

---

##### `TargetSubnetNameInput`<sup>Optional</sup> <a name="TargetSubnetNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput"></a>

```csharp
public string TargetSubnetNameInput { get; }
```

- *Type:* string

---

##### `FailoverTestPublicIpAddressId`<sup>Required</sup> <a name="FailoverTestPublicIpAddressId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestPublicIpAddressId"></a>

```csharp
public string FailoverTestPublicIpAddressId { get; }
```

- *Type:* string

---

##### `FailoverTestStaticIp`<sup>Required</sup> <a name="FailoverTestStaticIp" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestStaticIp"></a>

```csharp
public string FailoverTestStaticIp { get; }
```

- *Type:* string

---

##### `FailoverTestSubnetName`<sup>Required</sup> <a name="FailoverTestSubnetName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.failoverTestSubnetName"></a>

```csharp
public string FailoverTestSubnetName { get; }
```

- *Type:* string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.isPrimary"></a>

```csharp
public object IsPrimary { get; }
```

- *Type:* object

---

##### `RecoveryPublicIpAddressId`<sup>Required</sup> <a name="RecoveryPublicIpAddressId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.recoveryPublicIpAddressId"></a>

```csharp
public string RecoveryPublicIpAddressId { get; }
```

- *Type:* string

---

##### `SourceNetworkInterfaceId`<sup>Required</sup> <a name="SourceNetworkInterfaceId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.sourceNetworkInterfaceId"></a>

```csharp
public string SourceNetworkInterfaceId { get; }
```

- *Type:* string

---

##### `TargetStaticIp`<sup>Required</sup> <a name="TargetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp"></a>

```csharp
public string TargetStaticIp { get; }
```

- *Type:* string

---

##### `TargetSubnetName`<sup>Required</sup> <a name="TargetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName"></a>

```csharp
public string TargetSubnetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmTimeoutsOutputReference <a name="SiteRecoveryReplicatedVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmUnmanagedDiskList <a name="SiteRecoveryReplicatedVmUnmanagedDiskList" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmUnmanagedDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.get"></a>

```csharp
private SiteRecoveryReplicatedVmUnmanagedDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicatedVmUnmanagedDiskOutputReference <a name="SiteRecoveryReplicatedVmUnmanagedDiskOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicatedVmUnmanagedDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resetDiskUri">ResetDiskUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resetStagingStorageAccountId">ResetStagingStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resetTargetStorageAccountId">ResetTargetStorageAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskUri` <a name="ResetDiskUri" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resetDiskUri"></a>

```csharp
private void ResetDiskUri()
```

##### `ResetStagingStorageAccountId` <a name="ResetStagingStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resetStagingStorageAccountId"></a>

```csharp
private void ResetStagingStorageAccountId()
```

##### `ResetTargetStorageAccountId` <a name="ResetTargetStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.resetTargetStorageAccountId"></a>

```csharp
private void ResetTargetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.diskUriInput">DiskUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.stagingStorageAccountIdInput">StagingStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.targetStorageAccountIdInput">TargetStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.diskUri">DiskUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.stagingStorageAccountId">StagingStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.targetStorageAccountId">TargetStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskUriInput`<sup>Optional</sup> <a name="DiskUriInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.diskUriInput"></a>

```csharp
public string DiskUriInput { get; }
```

- *Type:* string

---

##### `StagingStorageAccountIdInput`<sup>Optional</sup> <a name="StagingStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.stagingStorageAccountIdInput"></a>

```csharp
public string StagingStorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TargetStorageAccountIdInput`<sup>Optional</sup> <a name="TargetStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.targetStorageAccountIdInput"></a>

```csharp
public string TargetStorageAccountIdInput { get; }
```

- *Type:* string

---

##### `DiskUri`<sup>Required</sup> <a name="DiskUri" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.diskUri"></a>

```csharp
public string DiskUri { get; }
```

- *Type:* string

---

##### `StagingStorageAccountId`<sup>Required</sup> <a name="StagingStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.stagingStorageAccountId"></a>

```csharp
public string StagingStorageAccountId { get; }
```

- *Type:* string

---

##### `TargetStorageAccountId`<sup>Required</sup> <a name="TargetStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.targetStorageAccountId"></a>

```csharp
public string TargetStorageAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicatedVm.SiteRecoveryReplicatedVmUnmanagedDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



